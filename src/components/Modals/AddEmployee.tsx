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
    Flex,
    Icon,
} from '@chakra-ui/core';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { FiDollarSign, FiDatabase } from 'react-icons/fi';

export default function AddEmployee({ isOpen, onClose }: any) {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [department, setDepartment] = useState('');
    const [salary, setSalary] = useState(1);
    const [startDate, setStartDate] = useState<number>(Date.now() / 1000);
    const [endDate, setEndDate] = useState<number>(Date.now() / 1000 + 86400);

    const departments = ['Engineering', 'Marketing', 'HR', 'Finance'];

    const onSubmit = () => {
        console.log('submitted');
    };
    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent borderRadius="0.25rem">
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
                                <SliderThumb size={6}>
                                    <Icon color="primary.100" as={FiDollarSign} />
                                </SliderThumb>
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

                        <Flex w="100%" mb="1rem">
                            <FormControl mr="0.5rem" isRequired>
                                <FormLabel htmlFor="startDate">Start Date</FormLabel>

                                <DatePicker
                                    id="startDate"
                                    minDate={moment().toDate()}
                                    selected={new Date(startDate * 1000)}
                                    onChange={(date: Date) => setStartDate(date.getTime() / 1000)}
                                    dateFormat="MMMM d, yyyy"
                                    customInput={<Input value={startDate} />}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="endDate">End Date</FormLabel>

                                <DatePicker
                                    id="endDate"
                                    minDate={moment().toDate()}
                                    selected={new Date(endDate * 1000)}
                                    onChange={(date: Date) => setEndDate(date.getTime() / 1000)}
                                    dateFormat="MMMM d, yyyy"
                                    customInput={<Input value={endDate} />}
                                />
                            </FormControl>
                        </Flex>
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
