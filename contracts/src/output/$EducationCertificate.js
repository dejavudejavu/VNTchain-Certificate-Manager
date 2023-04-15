
	var projectContract = vnt.core.contract([{"name":"$EducationCertificate","constant":false,"inputs":[],"outputs":[],"type":"constructor"},{"name":"queryAll","constant":false,"inputs":[],"outputs":[{"name":"output","type":"string","indexed":false}],"type":"function"},{"name":"issueCertificate","constant":false,"inputs":[{"name":"certHash","type":"string","indexed":false},{"name":"universitySignature","type":"string","indexed":false},{"name":"studentSignature","type":"string","indexed":false},{"name":"dateOfIssuing","type":"string","indexed":false},{"name":"certUUID","type":"string","indexed":false},{"name":"universityPK","type":"string","indexed":false},{"name":"studentPK","type":"string","indexed":false},{"name":"universityName","type":"string","indexed":false},{"name":"major","type":"string","indexed":false},{"name":"cgpa","type":"string","indexed":false},{"name":"departmentName","type":"string","indexed":false}],"outputs":[{"name":"output","type":"string","indexed":false}],"type":"function"},{"name":"registerUniversity","constant":false,"inputs":[{"name":"name","type":"string","indexed":false},{"name":"publicKey","type":"string","indexed":false},{"name":"location","type":"string","indexed":false},{"name":"description","type":"string","indexed":false}],"outputs":[{"name":"output","type":"string","indexed":false}],"type":"function"},{"name":"queryUniversityProfileByName","constant":true,"inputs":[{"name":"name","type":"string","indexed":false}],"outputs":[{"name":"output","type":"string","indexed":false}],"type":"function"},{"name":"queryCertificateSchema","constant":true,"inputs":[{"name":"schemaVersion","type":"string","indexed":false}],"outputs":[{"name":"output","type":"string","indexed":false}],"type":"function"},{"name":"queryCertificateByUUID","constant":true,"inputs":[{"name":"UUID","type":"string","indexed":false}],"outputs":[{"name":"output","type":"string","indexed":false}],"type":"function"},{"name":"getAllCertificateByStudent","constant":true,"inputs":[{"name":"studentPK","type":"string","indexed":false}],"outputs":[{"name":"output","type":"string","indexed":false}],"type":"function"},{"name":"getAllCertificateByUniversity","constant":true,"inputs":[{"name":"universityPK","type":"string","indexed":false}],"outputs":[{"name":"output","type":"string","indexed":false}],"type":"function"}]);
	var project = projectContract.new(
    {
     	from: vnt.core.accounts[0], 
     	data: '0x0161736db912c10100789cec5a7b7054d779ffce3dfb1dadf66a57ab37c8c2be12181150570f0b01e6b9383606121b1b482069465a76efaed659ed8a7d0072ac952c1c078c5d8b94a4e0490c9d716dd240e2bc66b0ec3a4c4a3ba47512e2da0e89894b52a04cc7718b899bb86e329d73ce7dadb4224849dab453fdb1f7f7fdcef9bef33dcefdeee572de5df8ea732daf4028d3470080dcaef628f93cf4903cf4607e283f34043d003dcad01019ea214324df43f264a8471db2ffc8508fcbb812fe03644839463c544feef07f381dcfea1f8e677b37a4e2c9ac9e06e074f9bd7a28328165c148644d2803840b9e6024b25e1f589b8ca640e144d5da643c1b0f25e2f7eb1f0aa5e3a16d093d0354e8dd964a8643597071a14c0a4e0a6fdf9e0b250cbc29b5b9ab1390e3923bd2a93e2e31ea2da394d2127729fff3b890f41342901250580d1d22c1e17d2e7508cccb158f5ab25ff1b23ebd2f951e5040edeeeed543fddddb42199d124f777724940d75ebc90855fc113d9c08a5f5c81db964381b4f2541ad99737b24170e71e1363d9d8d47e3e1505607af3f9ec9e47427e5ab4cebb17826aba73727e33bf474269e1d80f286ed393d3d60331bd2a9683ca1af1eb82bd4a783bf560c3bcc6c0cf7ea7d21a89830b07a60f3e6b5ef87cafa989e0d261205231bb3b9889ecc42d5ac22830e6faaddc26a3091801acf41ad4c01f546580dabc13f3c3c3c2cd18312f947f8557dcb43301fdcb36778188e37419005872524c1d220f877f3391a04994682ae2071c8608f079f35b55d05f405492b41163c61ceb08d2ac2886d94cb8a43fb94a5ad4d45eddf84da384f8e98a423aae0f05e6301578181517b5d326e5d728d758f486b34c8827b4cc3b63615b36d6d3eeda09ce61a37cd654f0b9edf631a2dc8011d97032e53872f67a7a776c20a41fb0dbe17a81db45723e3d4c835d41e9d9edae8f49c3c3dbd941c98de6a2f4d6fb5a3e66aae71abb9c6ade6d21cbb26f8e6f4563bb9d7b8299cdbf8ccf4eeba73d353bb3c3db557a6a776727a6a67f616ed6e07ac96a94da157aa9f55c0ff2847fe878419580d8ba86845129eb1a168ab41583dfa5d58444fdafc1e0983f03e39653579c09a1c3ccb07bb945163cebf48f184215e91e201c39867113d6adb3d684cfab99c74c41821f6c8bf178e28f6c8271f2918a1f6c8bec211973df28463447d8312929799590d8daab24a59c5031499590df778c1921ad532a29a6911ed5e0d82a62ea227640a34e8524e1a9074292f1950e952ce18907629af18d0d5a59c35207629a70cc8ba94d3062ce952ce1bd0dda55c3060699772d9809e2ee54d23f7476440e7f658f591eef3fac8121fe63382c7f8afe6f27f52ec03f11bfcca2316d68a71a408a714e16811ce5584c3221c2bc2b9fd0f4fe04a0be68971cd335157e64362f55de2acafcbacef9982fa0aa9d1e5a8ef11b3beae4574d8aeef1ebbbe8fdaf51db5eb7bc0a8c1d764490eda25396395e48c5d92df75cae5ba46e8e7ecd00bc2dee0e5a92074150fc40a6f9e0c4e03ffa7b88657d1c86af24013b1d436794155a5dbe5c6d5d22ae209cc93292a3e343af9d081c9870eda43ea214521438a119f74a791c828454f92512aca2a11a762b5af79b20b5971124de1712a96e2262f9429aa5ad09be6c96ee1dfc3551aa91dbde877c59d3d31f9d081e2438d44a3dc6dd2a8984e8bf535627b20955e2c50920168740baf9046d4437442e1878b14fe8459f8b393167ef81a853f39799d4e4d3e747af2a197261f3a33f9d02b930f9d9d7c48f4d6892d860f5d985cebf2e45a6f4eae75ceb16bff8aef5a5274d73a4a64955f94880f1b89338b74bbd7d814ffab8be0484cf0a47347ab8e7bd2de821af92dd277eaffd347d42142878cdc995dddbf57e8d86f0d0641ac7e68108a71e77fabc80bc3cb459e5eff34f1e9a5aac35481e0b05b3d4be0ffea5ff06ca97a88e4ac6f235a448fa5751d32f2fbcb8e76e8047b547cace90bdd974a4344ef0fa5b37d7a322bc870ac3f0410767c07baedf67b37c1030e65980f7f04179f7ae6e2f1a72f0d3f7fe933cffeeb0b4f8076f9cb0f5e78ce495c3afae7973eff4d49003ce55303117d5b2ed61d4f4653d525002ee1b74b94a40c661b717cc8b80e0380b2050016713007e91e17005dc635ee546ec21e00789d8fdc04f810006c11d8ed6a536ec24700e067c6d8d31676e1174cb337b95d5a111b729e1bbf6af17e7ccec23300bf6d4d9a078e598b1db35601bb04008300405a4aa20050e266bf0480c39c6973ff8a334f000023cacb0050430094b9487936683d0170b529736dcfe64acfee16b31c9ecdd5ec35e7ce03f6110240f9a43257b582f88fa6a32580174cec76e15b262e75e32f4cec29b30353fda0f808c0316eab19e962eed65788487ab3ed56b374eb9298e570abd9918ae655c0ae1080237c5283ab4df1e10dc458c60f38c7c4152e6c3771a51b979ab8aa0cef3671b51f7b4c5c538d4913d7ceb05daf6bc09d263f43c3874d3c730e3e6ae2fa79b8dfc437b480c2c3fc330540998f7498872a3c7fc16417203de30250fede245a90b6b9004af99ead00808b0a80e767fce7970a00a808003702c0db04805c2d7b8d5fb611ef1be2eaa200deb704e40e40c9659e19c2d30d6b00802a00e4bdb21200af9f5ad067c1f24a0e7fc5a19f2fbc1000caf9aefab55c1d2ab825bee5eab82585f09995c294817d36ae12c650e06a6ead0e007cdc9a8b382212439bcc854a887325befe6cbe92ea584975ac2471cd4545ded1c45ba0be0a005ab9badfa1ee77a8fb1d8e56daa666705355a629f566004822c0525e9f36f53308504b00d670f113bee30c8067ff635c7c82a7ddcb37a10197daf06e1bf6d83069c339366cb7e14e1b3e6cc3476db8df82e5d51440f99c28bdef3137c0bbdc73eed75f8b99fc9e35e0051bbe65c35f58509afa1b696a4f29c0390078909b7ac336f5863df33c87b56d20ab0c3770ee27af8ba2f8a21e809904e049aefeb6509f454d28d57fcee18c018f6c3175d5a68977b88919a73c0027f8dc059c7b9773b577f2a5e6f13dc2b95fbf6ef4f48a0755804304e01b7c310fe1762b17510b5789e5ca04aeed058099cbccb5bc441aa968f0022c27002f7113374b13a220373b4c340b3ca3d50bd04c00666e30cdcc33cd7cd427cdfc3337b3549a11255eea30b35c9a49fa0c3311d3cc0ac34cfda17280210040ce6e90aacb38de28f10a8e3749bc8ae3cd0ef3f70a0ce2f150ceef840e00bfcf784af685c2fc4109b09b780c2a910aef2f0578a6144081b6c3e6937fbb07e0714f21b7440578bfcab9768b7b440538a216ce6bf602dce62de4a23e80115f21079f55bc8617e95032a66778f7ab02809b006081e335a405000200d001002b1c3c77fc7c29c04f4b01c21e9be78eae5001ee5001ee510136aa000fa8f63877fa872ac0eb2ac04cafcdf30e52c913cf9b9021df695c63c6b5cbb8060180b7893f4500de1fbec8007863d8e706e037e2c3a500fc2e8a7800f8ed30a402f09d5aef05e0db6dab0f80ef9783e500bce033fc8ec0ae5889096ddb96d677900a72b3af0aa9cf5f7783af826cae03503a81fad656ad9c79abba54556600d085b0b60ac0554554957300e81553b8b0580560b5b0b68afae458c91ca0be15aaaa02b8cb8562698054904ad65e05e041e01735009c912a2b6702940588149a67ae9ca9a9005e044970033e69c09cc17d0328ef74ccf0cf22ed557cce1675ab0a50e1504053a1d230895ca1aad321543bb411a0868b9beba450ab8aa4d475825267af3743150b00ccb47861a9deb9b05c16e0a52af35d32114fea2f94f27749fedc2384bce7f3f20b91a527add9befed64c3adc1a08b426e2dbc09253b96c7f2e0bb023994dc4b7057af9eca2ff33dadd9fd6c3a9befe78420f84413c7350e1e6e94f816089a711b197d127864690307a1934850021800adf98f42a21483d5b0fef4612330784ee7b8460b96739aacfe3cdec6d6c5f86f39ec412462fe5471057707b6348191d5634853ad4461482aa67396accadf1e9e7f31a629b9cae32fa2945438dadc372d682da116c632358f724aa513ef5c7f9a8d3f2de7196f709cb8d58cf5ee3b37f90d7d043ff920490b227e9db831a22a3978093470937f0644138a38a154e3d1b434dc3d901ec18e396be9fd790d2674980d1370797996628fd1219130eb8144085df9db49520f1ec77e7ae5e753fefce5d756f7557f19ff517ddcf4b94bbea8e99ecd47fd64f32745598bf2ae211cef01641dfe32f479ec618d6f462f545acc9a0ff035893c6eafbb0a61fabeec69a14966fc01a7abfbb12672fc41a3a701a1bbab086ee3a8db5b434803574e7699c4d3debb086eec862135539ca7154c647b3a7b1917a3997e19c8f73e9d3d844cb39b79d737ecef573ae827329ce55722ec9b92acef571ae3a80e4efec00786fa387080f6039961ec199ec02966a01bc91ddc2e81bf96358cae8e78986b3628cfe349fc546469f22af21307a2e3f8a2d8cfe050970e9f5fc28be8fd1a7a5f4a3fc28ce65f41929fd303fcaf58e4ae96c7e146f66f40b52fa417e149b98d83dc0e86bf9516c66f48b527a353f8a37327a4c4aafe447b181d1e352fa07b9c297a4f4b25ce1cb52fa7efe345633fa2c59875f27ee6aac88e1d7c9ab789cb0283e4dc6f03819c1c3248a074954e0fd248a8f18783789e20312e6a298942816c51e89b646f15e89d6477185448ba2d826d1ec2836485413c54616465f1c917aa376baf923847ecb4ef70c67babf21d3fdb746ba9fcb6719fd8e4cf6d7649abe2b03fcaa0cf77b52fa4a7e14e7307a464acfcab1ef4be9cbf9d358c5e8cb641ddee1aec295ec355c3c862b47b03d8af3a31c489f571a2e47d0d78b98b01de6cf3afa63c3e1865eac67a711357a381fc006fa13b28e7de04f706e3b7a597604817e8ed38cfe846cc17a764c4e5cc7e85b24cae8a7f31adec5e845a2614b0cef7a1cd7b028b6b0e75b71555ae0255c8cb561c776212e10623bcee917e22c2176606d0a91963a52ca9fc2f48af0702ba38fe5a3dc8377c888e9c13ee1ea3b641dd6b118363c8e8d6da6bb7ba5bbef18ee7ad947707e2b2eff366a2c8b4bd86e9c1fc1e6765c92c10e16c5f9ec043677e082b490e6702282cdb7e0aced82a88d62137b18bd6c191dc907703ea3bf24eb30700f36eec7f9745700d7746123cb62fd18b6b3616c625bd0bb0591dd63b736fe2241f72ae3937d759047f098b28ead7f1ce75ade5f1914de3fa658c9be3ab88ed1234a94d1f3831abe40181d5544b65f208fe3378899ef2f91b4949e2146ca8f90ed9239448cac7f9af44b661f3112ff104949665010b7e00e7a7f563229c174622f1d3098906016e226bacb603e28982ebc83ee34989582e1edaf83373dc1c9a2534f00e7f0f627385979aa06b09666b388d4efa83e7fe7a24f2946f57f3428aa7f54b1aa7f56e4eea891bb0fc8dc0db1e5d8b0005b3a702883bbd81836b030b6dc82dbd3789f297562783bfeb1292dc4cdfd78972975e19a14ae32251ec1129e8b0e8bf1047001cfc51c8b5103388be7a2968dd157074730c0bdd4b0816dc17aee28a3be75f646e06f9074cc8cea948cea453baa6f89a85efc838aea9b32aa17278f8abf0fd3ef19dbbbae17cbd928d68db0562c6759ac630fb609d0ceef3bfece327b041bc6b066047d63886cb77c89f80e33ff8593c9a6c3895032a6892f8da9a4b638d01668d3e665d3b9e4c7b55b3adb9774b5bd6ffc4b5ceb75bcb7b51adf4133104f46f45d904825639af8c92533f158528f68f1641672f164b6ab1376841239ddf90d74d340bf0ee1de501a32d9743c1983780452e9882e70424fc6b2bd104aa74303ed0b6f59d4beb863d1a22e8884b221a1677d388deb194886fa74e8cf6d4bc4c3ebf50148a4a4e310d133e174bc5f60c79756870f1921dc19caf43a266c580f1979566ec37a07bd311e4b86b2b9b46e8eda442494d5ef8eaecd6472dc776e521cc32bfa69587c0b1eff7dd8f165d881bb93b93e871121ca940b78afbe3d174feb104e2523711164f7ea542a017d99184c38a3b8b96361d7c65054ff602e212ad2b1b0cbe2de1fdf61e18db96d160e4622f0717d20930b7546db3b77167f978709671c8b9c70bce6f9c6494e374e72b6f11a271baf7daed13ad53800bbe07e48eb995c220b7123a31f923787dc8122bdf7812c22842103f01075f16d46fe53a985094760c9f8d3af8a71f0953acebcba8a1d7745e3a42b2b38e45a22cfb7bae5d1d652f354aba7a2bb7b6728d3d71d0e2512dde16c2a9d51279c462d531d25f3163f99ea9b7030b5bcc8b954ff358fa54e3c7c2aeb5639c9a1d4aa6b9c49adbef691d41aeb44ea73eefff8e8279a78219a6e6d2a1a5a534b533895cc6443c96cd3add15022a3b734c593fdb96ca6e9d68f7eaca549b63743c80ef4734342219de3096d1a6cb1ec9b8b5ebf494b55524dd60ab2c33571bd88be4b8f1876066d1fa246f99c0e8c2fd2351db1b4cc8ef69b57b7572ad2e5a6a23ebe214e45b7a0774e45d16cb3d38b73c3fa69043835a5c2f63f154df1a498522e62fda12925bde0f9735dfbf4f7b6cb27369eebdbe7c92926d57a41988a92f92e31b5e45aaf1dffb399bd56fb2ec871369dfb2d52fc7b0f61c233e6ba9c2f78aeff6145219f88d715c5f575b8dfa7f3933fb6afaf0cd7df3aff9ba398a4e14c16c8d49e1dbffb583e36fc5f000000ffff', 
     	gas: '4000000'
    }, function (e, contract){
    	console.log(e, contract);
    	if (typeof contract.address !== 'undefined') {
        	console.log('Contract address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
   	 	}
 	})
	