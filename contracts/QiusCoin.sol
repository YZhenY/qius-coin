pragma solidity ^0.4.21;

import 'openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol';

contract QiusCoin is StandardToken {

    string public name = 'QiusCoin';
    string public symbol = 'QC';
    uint8 public decimals = 2;
    uint public INITIAL_SUPPLY = 1000000;

    constructor() public {
        totalSupply_ = INITIAL_SUPPLY;
        balances[msg.sender] = INITIAL_SUPPLY;
    }
}