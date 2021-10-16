# Checksumify

Simple checksum utilities for strings as a module.

* SHA3 256-bit
* CRC32
* A deterministic combination of haiku words and CRC32 checksum

## Install

    npm install @henrypoydar/checksumifier

## Usage

    import checksumify from 'checksumify'

    checksumify.crc32str("horse battery staple")
    // j5wkks

    checksumify.sha3256str("horse battery staple")
    // aa2b0cc543c0f1cfee62c6d...

    checksumify.crc32haiku("horse battery staple")
    // late-wave-j5wkks

## License

MIT