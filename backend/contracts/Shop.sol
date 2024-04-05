// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "./SFT.sol";

contract Shop {

    SFT sft = new SFT();

    Track[] public tracks;

    mapping (address => uint[]) ownedTracks;

    mapping (address => uint[]) publishedTracks;

    mapping (address => mapping (uint => bool)) doesOwnTrack;

    mapping (address => uint) userBalance;

    struct Track {
        address author;
        uint price;
        uint mintCounter;
    }

    function getBalance() external view returns (uint) {
        return userBalance[msg.sender];
    }

    function getOwnedTracks(address _user) external view returns (uint[] memory) {
        return ownedTracks[_user];
    }

    function getPublishedTracks(address _author) external view returns (uint[] memory) {
        return publishedTracks[_author];
    }

    function publishTrack(uint _price) external {
        Track memory newTrack;
        newTrack.author = msg.sender;
        newTrack.price = _price;
        tracks.push(newTrack);
        ownedTracks[msg.sender].push(tracks.length - 1);
    }

    function buyTrack(uint _id) external {
        require(tracks.length > _id, "This track does not exist");
        require(tracks[_id].author != msg.sender, "You can not buy your own track");
        require(!doesOwnTrack[msg.sender][_id], "You already bought this track");
        require(userBalance[msg.sender] >= tracks[_id].price, "Insuficient balance");
        userBalance[msg.sender] -= tracks[_id].price;
        userBalance[tracks[_id].author] += tracks[_id].price;
        sft.mintOne(msg.sender, _id);
        ownedTracks[msg.sender].push(_id);
        doesOwnTrack[msg.sender][_id] = true;
        tracks[_id].mintCounter += 1;
    }

    function withdraw(uint _amount) external {
        require(userBalance[msg.sender] >= _amount, "Insuficient balance");
        userBalance[msg.sender] -= _amount;
        (bool success, ) = msg.sender.call{value: _amount}("");
        require(success, "Withdraw failed");
    }

    function deposit() external payable {
        userBalance[msg.sender] += msg.value;
    }

    receive() external payable {
        userBalance[msg.sender] += msg.value;
    }
}