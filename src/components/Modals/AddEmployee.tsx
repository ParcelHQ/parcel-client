import React, { useState, useEffect, ChangeEvent } from 'react';
import {
    Button,
    ButtonGroup,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    Switch,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    Box,
    Select,
} from '@chakra-ui/core';
// import { ReactComponent as DaiIcon } from '../../assets/currency/dai.svg';

export default function AddEmployee({ isOpen, onClose }: any) {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [department, setDepartment] = useState('');
    const [salary, setSalary] = useState(1);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const departments = ['Engineering', 'Marketing', 'HR', 'Finance'];

    const onSubmit = () => {
        console.log('submitted');
    };
    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Add Employee</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <form onSubmit={onSubmit}>
                        <FormControl mb="1rem" isRequired>
                            <FormLabel htmlFor="name">Name</FormLabel>
                            <Input
                                name="name"
                                type="text"
                                placeholder={name}
                                value={name}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                            />
                        </FormControl>

                        <FormControl mb="1rem" isRequired>
                            <FormLabel htmlFor="address">Address</FormLabel>
                            <Input
                                name="address"
                                type="text"
                                placeholder={address}
                                value={address}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)}
                            />
                        </FormControl>

                        <FormControl mb="1rem" isRequired>
                            <FormLabel htmlFor="department">Department</FormLabel>
                            <Select
                                name="department"
                                placeholder="Department"
                                aria-label="Select a department"
                                onChange={(e: any) => setDepartment(e.target.value)}
                            >
                                {departments.map((department: string) => (
                                    <option key={department} value={department} aria-label={department}>
                                        {department}
                                    </option>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl mb="1rem" isRequired>
                            <FormLabel htmlFor="salary">Salary</FormLabel>
                            {/* <Input
                                name="salary"
                                type="number"
                                placeholder={salary}
                                value={salary}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setSalary(e.target.value)}
                            /> */}

                            <Slider color="purple" flex="1" value={salary} onChange={(salary) => setSalary(salary)}>
                                <SliderTrack />
                                <SliderFilledTrack />
                                {/* <SliderThumb fontSize="sm" width="32px" height="20px" children={value} /> */}
                                {/* <SliderThumb size={6}>
                                    <Box color="tomato" as={daiIcon} />
                                </SliderThumb> */}
                            </Slider>
                            <NumberInput
                                defaultValue={100}
                                min={1}
                                value={salary}
                                //@ts-ignore
                                onChange={(e) => setSalary(e)}
                            >
                                <NumberInputField type="number" />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </FormControl>
                        <FormControl mb="1rem" isRequired>
                            <FormLabel htmlFor="startDate">Start Date</FormLabel>
                            <Input
                                name="startDate"
                                type="text"
                                placeholder={startDate}
                                value={startDate}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setStartDate(e.target.value)}
                            />
                        </FormControl>

                        <FormLabel htmlFor="end-date">End Date?</FormLabel>
                        <Switch id="end-date" />

                        <FormControl mb="1rem" isRequired>
                            <FormLabel htmlFor="endDate">End Date</FormLabel>
                            <Input
                                name="endDate"
                                type="text"
                                placeholder={endDate}
                                value={endDate}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setEndDate(e.target.value)}
                            />
                        </FormControl>
                    </form>
                </ModalBody>

                <ModalFooter>
                    <ButtonGroup>
                        <Button variantColor="blue" onClick={onClose}>
                            Cancel
                        </Button>
                        <Button onClick={onClose}>Save</Button>
                    </ButtonGroup>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
