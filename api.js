const axios = require('axios');
const config = require('./config')

var API_result = ""; // for Export Respose
/********************Channel APIs************************/
var setPath = function() {
    console.log(config.API_URL + 'set_path')
    axios.post(config.API_URL + 'set_path', {
        member_name: config.memberName,
        order_name: config.orderName,
        peer_name: config.peerName
    }).then(res => {
        console.log(res);
    })
}

var createChannel = function() {
    console.log(config.API_URL + 'create_channel')
    axios.post(config.API_URL + 'create_channel', {
        channel_name: config.channelName
    }).then(res => {
        console.log(res);
    })
}

var connectChannel = function() {
    axios.post(config.API_URL + 'connect_channel', {
        chain_name: config.chainName,
    }).then(res => {
        console.log(res);
    })
}

var installChainCode = function() {
    axios.post(config.API_URL + 'install_chaincode', {
        url: config.url
    }).then(res => {
        console.log(res);
    })
}

var instanceChainCode = function() {
    axios.post(config.API_URL + 'instance_chaincode', {
        channel_name: config.channelName,
        init_query: config.initquery
    }).then(res => {
        console.log(res);
    })
}

var checkChainCode = function() {
    axios.post(config.API_URL + 'check_chaincode', {
        channelName: config.channelName
    }).then(res => {
        console.log(res)
    })
}

var sendQuery = function(query) {

    axios.post(config.API_URL + 'send_query', {
        channel_name: config.channelName,
        query: query
    }).then(res => {
        console.log(res)
    })
}

var sendInvokeQuery = function(invoke_query) {
        axios.post(config.API_URL + 'send_invoke_query', {
            channel_name: config.channelName,
            invoke_query: invoke_query
        })
    }
    /***********************************************************/




/************************APIs in AWS***********************/
//https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_Operations.html

/********************GET Methods***************************/

var getNetworks = function() {
    axios.get(config.API_URL + 'networks/' + config.AWS_INFO.networkId, {

    }).then(res => {
        API_result = res.data;
        console.log(res.data);
    })
}
var getMember = function(memberId) {
    axios.get(config.API_URL + 'networks/' + config.AWS_INFO.networkId + '/members/' + memberId, {

    }).then(res => {
        API_result = res.data;
        console.log(res.data);
    })
}

var getNode = function(memberId, nodeId) {
    // console.log(memberId, nodeId)
    axios.get(config.API_URL + 'networks/' + config.AWS_INFO.networkId + '/members/' + memberId + 'nodes/' + nodeId, {}).then(res => {
        API_result = res.data;
        console.log(res.data);
    })
}

var getProposal = function(proposalId) {
    axios.get(config.API_URL + 'networks/' + config.AWS_INFO.networkId + '/proposals/' + proposalId, {

    }).then(res => {
        API_result = res.data;
        console.log(res.data);
    })
}


/**************************** Create Methods**********************************/


var createMember = function(Req) {
    axios.post(config.API_URL + 'networks/' + config.AWS_INFO.networkId + '/members', Req).then(res => {
        API_result = res.data;
        console.log(res.data);
    })
}

var createNetwork = function(Req) {
    axios.post(config.API_URL + 'networks', Req).then(req => {
        API_result = res.data;
        console.log(res.data);
    })
}

var createNode = function(Req, memberId) {
    axios.post(config.API_URL + 'networks/' + config.AWS_INFO.networkId + '/members/' + memberId, Req).then(res => {
        API_result = res.data;
        console.log(res.data);
    })
}

var createProposal = function(Req) {
    axios.post(config.API_URL + 'networks/' + config.AWS_INFO.networkId + '/proposals/', Req).then(res => {
        API_result = res.data;
        console.log(res.data);
    })
}

/**************************Delete Methods *************************************/

var deleteMember = function(memberId) {
    axios.delete(config.API_URL + 'networks/' + config.AWS_INFO.networkId + '/members/' + memberId, {

    }).then(res => {
        API_result = res.data;
        console.log(res.data)
    })
}

var deleteNode = function(memberId, nodeId) {
    axios.delete(config.API_URL + 'networks/' + config.AWS_INFO.networkId + '/members/' + memberId + '/nodes/' + nodeId, {

    }).then(res => {
        API_result = res.data;
        console.log(res.data);
    })
}

module.exports = {
    setPath: setPath,
    createChannel: createChannel,
    connectChannel: connectChannel,
    installChainCode: installChainCode,
    instanceChainCode: instanceChainCode,
    checkChainCode: checkChainCode,
    sendQuery: sendQuery,
    sendInvokeQuery: sendInvokeQuery,
    getNetworks: getNetworks,
    getMember: getMember,
    getNode: getNode,
    createNetwork: createNetwork,
    API_result: API_result
}