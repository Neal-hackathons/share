// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract SFT is ERC1155, Ownable {
    constructor() ERC1155("") Ownable(msg.sender) {}

    function mintOne(address _user, uint256 _id) public onlyOwner {
        require(_user != address(0), "Invalid address");
        _mint(_user, _id, 1, "");
    }
}