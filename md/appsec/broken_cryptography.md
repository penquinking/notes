# Broken Cryptography

Cryptography is the design of a secure communication system that is unreadable by a third-parties. Broken cryptography is when the system fails to perform this function.

## Causes of Broken Cryptography

### Deprecated Algorithms

#### Hash Functions

- MD4 ✖️
- MD5 ✖️
- SHA-1 ✖️

#### Symmetric encryption

- DES ✖️
- RC2 ✖️
- RC4 ✖️
- 3DES ✖️

#### Asymmetric encryption and key exchange

- RSA (768 bits) ✖️
- Diffie-Hellman (768 bits prime) ✖️

### Inadequate implementation

- incorrectly signed data
- signed, encrypted data is predictable
- accepting signed data without authentication
- low-entropy random number generation creates pattern and predictability
- secret extraction by the determination of power, caching location and computational timing
- poor key management
- small key space
- key/iv re-use

#### Mitigation

- Do not implement deprecated algorithms.
- Implement security-community reviewed and accepted standards.
- Use well-known crypto libraries.
- Don’t reuse Initialisation Vectors (IVs), keys, or nonces.
- Use key management solutions; if possible, those tied with your operating system, hardware, or cloud provider.
- Get code reviewed.

### Weak Hashing Algorithm

Hashing algorithm is used to sign digital certificates, create message authentication codes (MACs), hash passwords and other authentication cases.

#### Strong hash functions

- Any minor change to the data input, even if the change constitutes only 1 byte, will result in an uncorrelated hash value; this is known as an "avalanche effect".
- Pre-image Resistant: it should be computationally difficult to reverse a hash to its pre-hashed form.
- Second Pre-Image Resistant: it should be difficult for an attacker to find a different input with the same hash given an input and a hash.
- Collision Resistant: it should be difficult for an attacker to identify two different inputs of arbitrary length that result in identical hashes. **Note**: *difficult does not mean impossible - every hashing algorithm permits collisions... the goal is to make this as a remote reality as possible!*

#### Password hashing requirements

- Computing the hash must be computationally intense to avoid brute force and dictionary attacks.
- Data to be hashed should incorporate a *salt* so, even if the input is the same, the algorithm will produce a different hash. This protects against [Rainbow Table attacks](https://en.wikipedia.org/wiki/Rainbow_table).

**Impact**  
The impact of successful attacks on weak hashing algorithms can be disastrous, limited only by the value of data, and the imagination of the attacker in leveraging said data. There are countless examples of devastating data breaches exemplifying the fallout from poor hashing algorithm choice. For example, in 2016 (a full two years after the fact) Yahoo! announced they had been the victim of a gargantuan breach, the data of which constituted over 500 million Yahoo! accounts, with account details including; DOBs, unencrypted security questions and answers, and hashed passwords. Had the passwords been hashed by a strong and up to date hashing algorithm, they may have remained worthless data to the attacker. However, the algorithm used was a known weak hashing algorithm - MD5.

#### Prevention

Given their critical function as a security enabler for numerous online functions, it is imperative for organizations and individuals responsible for implementing functions utilizing hashing algorithms to ensure they are up to speed with the latest iteration. This is, in reality, the only solution to the problem that weak hashing algorithm use represents.

Previously standard hashing functions that are nowadays considered **very high risk or completely broken** include:

- **MD5**: known to be susceptible to collision attacks since the mid-'90s, and considered completely broken.
- **SHA-1**: considered insecure against well-resourced adversaries since 2005 and formally deprecated for use by NIST in 2011.
- **RIPEMD & RIPEMD-128**: deemed insecure, with a [reported collision](https://eprint.iacr.org/2004/199) occurring in 2004.
- **Whirlpool**: a [rebound attack presented collisions](https://www.cosic.esat.kuleuven.be/fse2009/slides/2402_1150_Schlaeffer.pdf) in 2009.

Current hash functions deemed robust and accepted as standard include:

- **RIPEMD-160/256/320**: multiple variants with differing levels of security, although all considered robust.
- **BLAKE2/3**: purportedly faster than SHA-1/2/3 and immune to length extension.
- **SHA-2**: all variants publicly resistant to collision attacks, and most variants resistant to [length extension attacks](https://crypto.stackexchange.com/questions/3978/understanding-the-length-extension-attack).
- **SHA-3**: the most recent iteration of the SHA series; publicly resistant to collision and length extension attacks.

When the hash function is used to hash passwords, consider the use of more suitable algorithms, such as:

- **bcrypt**: the default password hash algorithm used in many systems.
- **scrypt**: an algorithm specifically designed to make the hashing computationally intense so to mitigate the bruteforcing.
- **argon2**: the winner of the 2015 Password Hashing Competition; the computational intensiveness of the process can be fine-tuned.
- **PBKDF2**: a key derivarion algorithm recommended by NIST.

In any case, make sure to use an appropriate *work factor*, i.e., a high enough iteration count.

## Testing

Verify that known weak hashing algorithms (i.e. MD5, SHA1, etc.) are not used unless required for backwards compatibility.

- **OWASP ASVS**: [6.2.5](https://github.com/OWASP/ASVS/releases/download/v4.0.2_release/OWASP.Application.Security.Verification.Standard.4.0.2-en.pdf)
- **OWASP Testing Guide**: [Testing for Weak Encryption](https://owasp.org/www-project-web-security-testing-guide/v42/4-Web_Application_Security_Testing/09-Testing_for_Weak_Cryptography/04-Testing_for_Weak_Encryption.html)

## References

[OWASP - Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)

[Wikipedia - Cryptographic Hash Function](https://en.wikipedia.org/wiki/Cryptographic_hash_function)

[Digicert - Weak Hashing Algorithm](https://docs.digicert.com/certificate-tools/discovery-user-guide/tlsssl-certificate-vulnerabilities/weak-hashing-algorithm/)

[Dalhousie University - MD5 Collission Demo](https://www.mscs.dal.ca/~selinger/md5collision/)

[Wikipedia - Secure Hash Algorithms](https://en.wikipedia.org/wiki/Secure_Hash_Algorithms)

[Cryptography Stack Exchange - Understanding the Length Extension Attack](https://crypto.stackexchange.com/questions/3978/understanding-the-length-extension-attack)

[IACR - Collisions for Hash Functions](https://eprint.iacr.org/2004/199.pdf)
