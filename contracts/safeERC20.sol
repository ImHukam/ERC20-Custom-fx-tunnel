// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract SafeToken is ERC20, Ownable {
    using SafeERC20 for IERC20;

    constructor() ERC20("SafuToken", "SAFU") {}

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}