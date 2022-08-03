var log_server_addr = "http://192.168.193.128/log.gif";//用户提交了日志，需要向node4提交

function add_to_cookie(lgn_name) {
    $.cookie("lgn_name", lgn_name, {expires:7, path:'/'})
}

function remove_from_cookie() {
    $.removeCookie("lgn_name", {path:'/'})
}
//函数就是向Nginx发送点击事件信息用的
function sendLog(job_code, action) {
    $.ajax({
        url:log_server_addr,
        type:"POST",
        async:false,
        data:combine(action, job_code),
        dataType:"json",
        success:function (data) {
        },
        error:function () {
            alert("失败")
        }
    })
}

/*组装报文*/
function combine(act, jc) {
    let user_id = $.cookie("lgn_name");
    let act_time = new Date().getTime();
    let action = act;
    let job_code = jc;

    let result = {}
    result["user_id"] = user_id;
    result["act_time"] = act_time;
    result["action"] = action;
    if (action == 'login' || action == 'logout') {

    } else {
        result["job_code"] = job_code;
    }
    return result;
}

/*点击事件*/
function click(job_code) {
    job_code = "clk_" + $.cookie("index");
    $.cookie("index", Number($.cookie("index")) + 1);
    sendLog(job_code, "click");
    window.location.href = "item.html";
}

/*收藏*/
function collect() {
    let job_code = "clct_" + $.cookie("index");
    $.cookie("index", Number($.cookie("index")) + 1);
    sendLog(job_code, "collect");
}

/*下单*/
function order() {
    let job_code = "ord_" + $.cookie("index");
    $.cookie("index", Number($.cookie("index")) + 1);
    sendLog(job_code, "order");
    window.location.href="pay.html";
}

/*支付*/
function pay() {
    let job_code = "pay_" + $.cookie("index");
    $.cookie("index", Number($.cookie("index")) + 1);
    sendLog(job_code, "pay");
    window.location.href = "list.html";
}

/*登录*/
function login() {
    if (isNaN($.cookie("index"))) $.cookie("index", 0);
    let job_code = "lgn_"+ $.cookie("index");
    add_to_cookie("user_" + $.cookie("index"))
    $.cookie("index", Number($.cookie("index")) + 1);
    sendLog(job_code, "login");
    window.location.href = "list.html";
}

function logout() {
    let job_code = "lgot_" + $.cookie("index");
    $.cookie("index", Number($.cookie("index")) + 1);
    sendLog(job_code, "logout")
    remove_from_cookie();
    window.location.href = "index.html";
}

function toIndex() {
    window.location.href="index.html";
}