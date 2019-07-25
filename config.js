/*Setting Names for Aws*/


// var API_URL = "http://ec2-3-212-6-212.compute-1.amazonaws.com:5000/";
var API_URL = "http://192.168.0.12:80/"
    //constants 
const memberName = "1";
const orderName = "2";
const peerName = "3";
const channelName = "4";
const chainName = "5";

//AWS INFOs
const AWS_INFO = {
        networkId: "",
        memberlist: {
            memberId: []
        },
        nodelist: {
            nodeId: []
        }
    }
    /******************************/

//variables
var invokequery = "";
var initquery = "";

var url = ""; // chain_code url

module.exports = {
    API_URL: API_URL,
    AWS_INFO: AWS_INFO,
    memberName: memberName,
    orderName: orderName,
    peerName: peerName,
    channelName: channelName,
    chainName: chainName,
    invokequery: invokequery,
    initquery: initquery
}