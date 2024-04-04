// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "./SFT.sol";

contract Shop {

    SFT sft = new SFT();

    uint currentTrackID = 0;

    mapping (uint => Track) trackFromID;

    mapping (address => uint[]) ownedTracks;

    mapping (address => uint[]) publishedTracks;

    mapping (address => mapping (uint => bool)) doesOwnTrack;

    mapping (address => uint) userBalance;

    struct Track {
        address author;
        uint price;
        uint mintCounter;
    }

    function publishTrack(uint _price) public {
        currentTrackID += 1;
        trackFromID[currentTrackID].author = msg.sender;
        trackFromID[currentTrackID].price = _price;
    }

    function buyTrack(uint _id) public {
        require(!doesOwnTrack[msg.sender][_id], "You already bought this track");
        require(userBalance[msg.sender] >= trackFromID[_id].price, "Insuficient balance");
        userBalance[msg.sender] -= trackFromID[_id].price;
        userBalance[trackFromID[_id].author] += trackFromID[_id].price;
        sft.mintOne(msg.sender, _id);
        ownedTracks[msg.sender].push(_id);
        doesOwnTrack[msg.sender][_id] = true;
        trackFromID[_id].mintCounter += 1;
    }

    function withdraw(uint _amount) public {
        require(userBalance[msg.sender] >= _amount, "Insuficient balance");
        (bool success, ) = msg.sender.call{value: _amount}("");
        require(success, "Withdraw failed");
    }

    receive() external payable {}
}