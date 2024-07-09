<h1 align="center">Single Vendor E-Commerce Platform </h1>
<p align="center"><i>Implementing a 4 bit nano processor </i></p>


## Overview

As part of the <b>CS1050 - Computer Organization and Digital Design</b> module,
This project involves designing and developing a 4-bit processor capable of executing four specific instructions. By completing this project, able to implement:

<ul>
    <li>Design and develop a 4-bit arithmetic unit that can add and subtract signed integers.</li>
    <li>Decode instructions to activate necessary components on the processor.</li>
    <li>Design and develop k-way b-bit multiplexers or tri-state busses.</li>
    <li>Verify the functionality of the processor through simulation and implementation on a development board.</li>
</ul>

## Components

<ul>
    <li><strong>4-bit Add/Subtract Unit</strong>
        <ul>
            <li>This unit should be capable of adding and subtracting numbers represented using 2’s complement.</li>
        </ul>
    </li>
    <li><strong>3-bit Adder</strong>
        <ul>
            <li>This unit is used to increment the Program Counter.</li>
        </ul>
    </li>
    <li><strong>3-bit Program Counter (PC)</strong>
        <ul>
            <li>The Program Counter needs to be reset to 0 when required. Build it using D Flip-Flops with a clear/reset input.</li>
        </ul>
    </li>
    <li><strong>k-way b-bit Multiplexers</strong>
        <ul>
            <li>A k-way b-bit multiplexer can take in k inputs, each with b bits, rather than a single bit. The output is a group of b bits. There are log<sub>2</sub> k control bits, and these control bits are used to select one of the k groups of b bits rather than a single bit.</li>
        </ul>
    </li>
    <li><strong>Register Bank</strong>
        <ul>
            <li>Contains 8, 4-bit registers (named R0 to R7).</li>
            <li>Hardcode value of R0 to all 0s.</li>
        </ul>
    </li>
    <li><strong>Program ROM</strong>
        <ul>
            <li>This stores our Assembly program.</li>
        </ul>
    </li>
    <li><strong>Buses</strong>
        <ul>
            <li>Used 3, 4, and 12-bit buses to connect components. This had greatly simplified our design rather than running so many wires around. We used labels such as D(3 downto 0), I(11 downto 0), M(3 downto 0), and R(3 downto 0).</li>
        </ul>
    </li>
    <li><strong>Instruction Decoder</strong>
        <ul>
            <li> The Instruction Decoder circuit is activating necessary components based on the instructions the user wish to execute</li>
        </ul>
    </li>
  
</ul>


The following table contains the list of functions the shell should support
alongside with a brief description of what they are supposed to do.

<img src="assets/Screenshot 2024-07-08 at 20.49.21.png" alt="Awesome README Templates" />

Block diagram of the nanoprocessor is given below

<img src="assets/Screenshot 2024-07-08 at 21.44.40.png" alt="Awesome README Templates" />

## Practical Operation

See `Instructions For Practical Operations.txt` for ways to get started.

## Report and Documentation

See 'Project Report.pdf' 

## Demo 
https://github.com/ThisaraWeerakoon/Nano_Processor/assets/83450623/20d34ea7-4976-4179-bd00-1663a7685924


## Contributing

Contributions are always welcome!


## :pencil: License

This project is licensed under [MIT](https://opensource.org/licenses/MIT) license.

## :man_astronaut: Show your support

Give a ⭐️ if this project helped you!
Example user programs for use.
