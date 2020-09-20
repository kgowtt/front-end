let express = require('express');
let axios = require('axios');



let app =express();

// app.use((req,res,next)=>{
//     res.append('Access-Control-Allow-Origin','*');
//     res.append('Access-Control-Allow-Content-Type','*');
//     next();
// })
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    next();
});


// Cookie有時間戳
let options={
    headers:{
        // 'Accept': 'application/json, text/plain, */*',
        // 'Accept-Encoding': 'gzip, deflate, br',
        // 'Accept-Language': 'zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7,und;q=0.6',
        // 'Connection': 'keep-alive',
        'Cookie': 'xq_a_token=4db837b914fc72624d814986f5b37e2a3d9e9944; xqat=4db837b914fc72624d814986f5b37e2a3d9e9944; xq_r_token=2d6d6cc8e57501dfe571d2881cabc6a5f2542bf8; xq_id_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1aWQiOi0xLCJpc3MiOiJ1YyIsImV4cCI6MTYwMDQ4MzAwNywiY3RtIjoxNTk4NDg3NDI3NjA0LCJjaWQiOiJkOWQwbjRBWnVwIn0.aKH_IZCKxyI1ywe-8hNZaVhrINR24aOinZ8MQ0wlx6YgtVIK3xLFr69Ha0PJmQH70BUHgUxMFEBbI5v2GRbB00oz-sYwaurN8FzRjFLUcis9Ck2F-K527sgEc01hcYia-Ns616t1wDBuk_A4SZODxKyckFFN_-JLo_UMUQFrwQ0wLLYDk0C1g3R4OxEfYEiKAjQf09MeFCPiE-j_dIFH05824P-RcXM1H-4SlC0pNADTCzeJ9EO6mhQ3v81wyYls1YYC-0bHDODRT8KZtM4epUoUYLbV-WrfQC2jxnzEo9ebMFSp4sambvhH5M_mHSfjGNt8r-VxIrtH2BeT-GoxFQ; u=121598487464631; device_id=24700f9f1986800ab4fcc880530dd0ed; Hm_lvt_1db88642e346389874251b5a1eded6e3=1598487469,1598487475,1598487492; Hm_lpvt_1db88642e346389874251b5a1eded6e3=1598573520',
        // 'Host': 'stock.xueqiu.com',
        // 'Origin': 'https://xueqiu.com',
        // 'Referer': 'https://xueqiu.com/',
        // 'Sec-Fetch-Dest': 'empty',
        // 'Sec-Fetch-Mode': 'cors',
        // 'Sec-Fetch-Site': 'same-site',
        // 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36'  
    },
}

app.get('/',(req,res)=>{
    res.send('apiSewver');
});


// 指數
app.get('/api/index/quote',async (req,res)=>{

    let httpUrl ="https://stock.xueqiu.com/v5/stock/batch/quote.json?symbol=SH000001,SZ399001,SZ399006,SH000688,HKHSI,HKHSCEI,HKHSCCI,.DJI,.IXIC,.INX";


    let result;
    try{
        result = await axios.get(httpUrl,options);
    }catch(error){
        console.log(error);
    }
    res.json(result.data);
});

//熱股榜 
app.get('/api/index/hotStock',async (req,res)=>{
    // ?index= 10 全球  12滬深  13港股  11美股

    let index =req.query.index?req.query.index:12;    
    let httpUrl =`https://stock.xueqiu.com/v5/stock/hot_stock/list.json?size=8&_type=${index}&type=${index}`;
    let result= await axios.get(httpUrl,options);
    res.json(result.data);
});

//財金新聞  雪球熱帖
app.get('/api/index/news',async (req,res)=>{
    // ?category= -1 推薦  
    let category =req.query.category?req.query.category:-1;    

    let httpUrl =`https://xueqiu.com/statuses/hot/listV2.json?since_id=${category}&max_id=-1&size=15`;
    let result= await axios.get(httpUrl,options);
    res.json(result.data);
});

//7×24
app.get('/api/index/livenews',async (req,res)=>{
    let httpUrl =`https://xueqiu.com/statuses/livenews/list.json?since_id=-1&max_id=-1&count=15`;
    let result= await axios.get(httpUrl,options);
    res.json(result.data);
});




app.listen(8080,()=>{
    console.log('server start:','http://localhost:8080');
})


// node index.js 進行啟動
// ctrl +c 結束運行



// async  異步處理