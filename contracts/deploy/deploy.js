var fs = require('fs');
var Vnt = require("vnt")
var vntkit = require("vnt-kit")
var Tx = require("ethereumjs-tx")

// 设置连接的节点
var vnt = new Vnt();
vnt.setProvider(new vnt.providers.HttpProvider("http://localhost:8545"));
var coinbase = vnt.core.coinbase;
console.log(coinbase);

var balance = vnt.core.getBalance(coinbase);
console.log(balance.toString(10));



// 解锁用户
var ksDir = "/root/testnet/node0/keystore/"
var kFile1 = "UTC--2023-04-15T03-11-05.065501400Z--b8d73f50304f87dcbd2c6bf5b66b4fe1a117d722"
var pass1 = ""

function openAccount(file, passwd) {
    var content = fs.readFileSync(file).toString("utf-8")
    return vntkit.account.decrypt(content, passwd, false)
}
var account1 = openAccount(ksDir + kFile1, pass1)
try{
    var account1 = openAccount(ksDir + kFile1, pass1)
}catch(err){
    console.log(err.message)
}

// 准备代码和abi
var codeFile = "/root/go/src/github.com/hyperledger/vnt-blockchain-academic-certificates/contracts/src/output/$EducationCertificate.compress"
var abiFile = "/root/go/src/github.com/hyperledger/vnt-blockchain-academic-certificates/contracts/src/output/$EducationCertificate.abi"
var wasmabi = fs.readFileSync(abiFile)
//将abi数据解析成json结构
var abi = JSON.parse(wasmabi.toString("utf-8"))
    
// 部署合约
function getTransactionReceipt(tx, cb) {
    var receipt = vnt.core.getTransactionReceipt(tx);
    if (!receipt) {
      setTimeout(function() {
        getTransactionReceipt(tx, cb)
      }, 1000);
    } else {
      cb(receipt)
    }
} 

//这是合约创建主函数
function deployWasmContract() {
    // 通过abi与代码路径初始化合约
    var contract = vnt.core.contract(abi).codeFile(codeFile)
    // 生成合约创建的数据
    var data = contract.packContructorData()
    var gas = vnt.core.estimateGas({data: data});

    var nonce = vnt.core.getTransactionCount(account1.address);
    

    // 生成交易的结构体，指定nonce, gasPirce, gasLimit, value, data等字段
    var options = {
       nonce: vnt.toHex(nonce),
       gasPrice: vnt.toHex(30000000000000),
       gasLimit: vnt.toHex(gas),    
        // gasPrice: vnt.toHex(vnt.toWei(18, 'Gwei')),
        // gasLimit: vnt.toHex(4000000),      
       value: '0x00',
       data: data,
       chainId: 1012  //这里必须指定chainId，即你所连接的node的chainId，否则交易签名将出错
    }

    // 生成交易
    var tx = new Tx(options);
    // 使用之前准备好的私钥，对交易签名
    tx.sign(Buffer.from(account1.privateKey.substring(2,), "hex"));

    // 将交易数据进行序列化
    var serializedTx = tx.serialize();

    // 发送交易
    let result = vnt.core.sendRawTransaction('0x' + serializedTx.toString('hex'),        
    function(err, txHash) {
      if (err) {
          console.log("err happened: ", err)
      } else {
          // 打印交易的hash
          console.log("transaction hash: ", txHash);
          // 获取交易的清单
          getTransactionReceipt(txHash, function(receipt) {
              console.log("tx receipt: ", receipt)
              console.log("tx status: ", receipt.status)
              console.log("contract address: ", receipt.contractAddress)
          })
      }
    });   
}

// 调用部署函数
deployWasmContract();   
