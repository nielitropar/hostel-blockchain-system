// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract HostelAllocation {
    address public admin;
    uint256 public roomCount;

    struct Room {
        uint256 id;
        uint256 fee;
        bool isAllocated;
        address student;
    }

    struct Student {
        uint256 roomId;
        bool isAllocated;
    }

    mapping(uint256 => Room) public rooms;
    mapping(address => Student) public students;

    event RoomAdded(uint256 indexed roomId, uint256 fee);
    event RoomAllocated(uint256 indexed roomId, address indexed student, uint256 fee);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin allowed");
        _;
    }

    constructor(address _admin) {
        admin = _admin;
        roomCount = 0;
    }

    function addRoom(uint256 _fee) external onlyAdmin {
        roomCount++;
        rooms[roomCount] = Room({
            id: roomCount,
            fee: _fee,
            isAllocated: false,
            student: address(0)
        });

        emit RoomAdded(roomCount, _fee);
    }

    function applyForRoom(uint256 _roomId) external payable {
        require(_roomId > 0 && _roomId <= roomCount, "Invalid room ID");
        require(!rooms[_roomId].isAllocated, "Room already allocated");
        require(!students[msg.sender].isAllocated, "Student already allocated");
        require(msg.value == rooms[_roomId].fee, "Incorrect hostel fee");

        rooms[_roomId].isAllocated = true;
        rooms[_roomId].student = msg.sender;

        students[msg.sender].roomId = _roomId;
        students[msg.sender].isAllocated = true;

        // Transfer fee to admin
        payable(admin).transfer(msg.value);

        emit RoomAllocated(_roomId, msg.sender, msg.value);
    }

    function getRoom(uint256 _roomId) external view returns (uint256, uint256, bool) {
        require(_roomId > 0 && _roomId <= roomCount, "Invalid room ID");
        Room memory room = rooms[_roomId];
        return (room.id, room.fee, room.isAllocated);
    }

    function getMyAllocation() external view returns (uint256, bool) {
        Student memory student = students[msg.sender];
        return (student.roomId, student.isAllocated);
    }
}