# Truffle
Truffle with environment setting and multiple network migration.

## Network supported

- Local (localhost evm)
- Ethereum Ropsten
- Binance Testnet
- Binance Mainnet

## Setting Env

Edit `env` file and set variable needed. <br />
example:
```
# Version
COMPILER_VERSION=0.8.7

# Local
GANACHE_SEED_PHASE="load program pill roof quarter dignity sausage scheme"
PROVIDER_LOCAL=http://127.0.0.1:7545

# TESTNET Deployment
SECRET_WALLET=d46f1784083662995be12bd94g752ae414d3bfb
PROVIDER_ROPSTEN=https://ropsten.infura.io/v3/847d1860447a4cd24252f33
PROVIDER_BINANCE_TESTNET=https://data-seed-prebsc-1-s1.binance.org:8545/

# MAINNET Deployment
SECRET_WALLET_BINANCE_MAINNET_DEPLOYER=d46f1784083662995be12bd94g752ae414d3bfb
PROVIDER_BINANCE_MAINNET=https://bsc-dataseed.binance.org/

# CHAIN Explorer API
API_KEY_ETHERSCAN=1VTD8DJJ23N4T4GDGY8Y6R4FHBJSM357X
API_KEY_BSCSCAN=C23RKJ578ZHKFN4BJXPO3R3RWJD6PJZU81R
```

## Documentation

### 1. Compile
```
truffle compile
```

### 2. Migrate
Truffle migration is using format like `truffle migrate --network <network type> --reset`.

List of network type:
- development
- ropsten
- binanceTestnet
- binanceMainnet

example:
```
truffle migrate --network development --reset
```

### 3. Verify
Truffle verify is using format like `truffle run verify <contract name>@<contract address> --network <network type>`.

example:
```
truffle run verify TokenAJX@0x946C030dC0c57Cdd88655Cf659C4ba49CD839887 --network development
```

