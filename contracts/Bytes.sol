// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;


contract Bytes {

    // There are two types of bytes
    // 1. Fixed-size Byte (Only Read)
    // 2. Dynamic Size Byte Array (Read and Write Both)
    
    bytes3 public animal = "cat"; // fix

    bytes public alphabets = "abc"; //dynamic

    // Accessing Fixed-Size Byte Array
    function getCharacterAnimal(uint _index) external view returns(bytes3){
        return animal[_index];
    }

    // Accessing Dynamic-Size Byte Array
    function pushAlphabets() external {
        alphabets.push("d");
    }

    function getAlphabet(uint _i) external view returns(bytes1){
        return alphabets[_i];
    } 



}