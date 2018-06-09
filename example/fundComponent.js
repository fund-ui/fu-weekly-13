/**
 * 分页生成函数
 * @param  {[当前页数]}
 * @param  {[总页数]}
 * @return {[分页列表]}
 */
function paginatorCeateor(currentPage, totalPages, parameter, fold) {
    var paginatorLeft = "<div class='paginationLeft'>第" + parameter.page + "/" + totalPages + "页</div>";
    var paginatorRight = "<div class='paginatorPageNumber'> 跳转到第 <select id='changePageNum'></select> 页</div><div class='paginationRight'><a href='javascript:void(0);' onclick='changePage(1)'>首页</a><a href='javascript:void(0);' class='paginationBefore' onclick='changePageBefore()'>上一页</a><a href='javascript:void(0);' onclick='changePageAfter()' class='paginationAfter'>下一页</a><a href='javascript:void(0);' onclick='changePage(" + totalPages + ")'>尾页</a></div>";
    $(".paginationFund").append(paginatorLeft);
    $(".paginationFund").append(paginatorRight);
    // 容错页数，超过页数不显示
    if (totalPages > 100) {
        if (fold == '100') {
            for (var i = 100 ; i <= totalPages ; i++) {
                var paginatorOpition = "<option value='" + i + "''>" + i + "</option>";
                $(".paginatorPageNumber select").append(paginatorOpition);
            }
        }
        else {
            for (var i = 1 ; i <= 100 ; i++) {
                var paginatorOpition = "<option value='" + i + "''>" + i + "</option>";
                $(".paginatorPageNumber select").append(paginatorOpition);
            }
            var morePage = "<option class='morePage'>" + '更多' + "</option>";
            $(".paginatorPageNumber select").append(morePage);
        }
    }
    else {
        for (var i = 1 ; i <= totalPages ; i++) {
            var paginatorOpition = "<option value='" + i + "''>" + i + "</option>";
            $(".paginatorPageNumber select").append(paginatorOpition);
        }
    }
    if (parameter.page == '1') {
        $(".paginationBefore").remove();
    }
    if (parameter.page == totalPages) {
        $(".paginationAfter").remove();
    }
    $("#changePageNum").val(parameter.page);
    selectPage(parameter);
}
//首页 尾页点击事件
function changePage(page) {
    $(".table").html('');
    $(".paginationFund").html('');
    foldJudgement(page);
    parameter.page = page;
    drawTable(parameter, link, container, currentPage, tableClass, cell, colStyle, fold);
}
//点击上一页
function changePageBefore() {
    $(".table").html('');
    $(".paginationFund").html('');
    parameter.page--;
    foldJudgement(parameter.page);
    drawTable(parameter, link, container, currentPage, tableClass, cell, colStyle, fold);
}
//点击下一页
function changePageAfter() {
    $(".table").html('');
    $(".paginationFund").html('');
    parameter.page++;
    foldJudgement(parameter.page);
    drawTable(parameter, link, container, currentPage, tableClass, cell, colStyle, fold);
}
//切换页数
function selectPage(parameter) {
    $("#changePageNum").change(function () {
        if ($(this).val() == "更多") {
            debugger;
            $(".table").html('');
            $(".paginationFund").html('');
            parameter.page = "100";
            var fold = "100";
            drawTable(parameter, link, container, currentPage, tableClass, cell, colStyle, fold);
        }
        else {
            if ($(this).val() > 100) {
                var fold = "100";
                parameter.page = $(this).val();
                $(".table").html('');
                $(".paginationFund").html('');
                drawTable(parameter, link, container, currentPage, tableClass, cell, colStyle, fold);
            } else {
                parameter.page = $(this).val();
                $(".table").html('');
                $(".paginationFund").html('');
                drawTable(parameter, link, container, currentPage, tableClass, cell, colStyle, fold);
            }
        }
    });
}

/**
 * 分页生成器 适用于DoT模块
 * @param  {[type]} currentPage [description]
 * @param  {[type]} totalPages  [description]
 * @param  {[type]} parameter   [description]
 * @param  {[type]} fold        [description]
 * @return {[type]}             [description]
 */
function paginatorCeateorDot(currentPage, totalPages, parameter, fold) {
    $(".paginationFund").html('');
    var paginatorLeft = "<div class='paginationLeft'>第" + parameter.currentPage + "/" + totalPages + "页</div>";
    var paginatorRight = "<div class='paginatorPageNumber'> 跳转到第 <select id='changePageNum'></select> 页</div><div class='paginationRight'><a href='javascript:void(0);' onclick='changePageDOT(1)'>首页</a><a href='javascript:void(0);' class='paginationBefore' onclick='changePageBeforeDOT()'>上一页</a><a href='javascript:void(0);' onclick='changePageAfterDOT()' class='paginationAfter'>下一页</a><a href='javascript:void(0);' onclick='changePageDOT(" + totalPages + ")'>尾页</a></div>";
    $(".paginationFund").append(paginatorLeft);
    $(".paginationFund").append(paginatorRight);
    // 容错页数，超过页数不显示
    if (totalPages > 100) {
        if (fold == '100') {
            for (var i = 100 ; i <= totalPages ; i++) {
                var paginatorOpition = "<option value='" + i + "''>" + i + "</option>";
                $(".paginatorPageNumber select").append(paginatorOpition);
            }
        }
        else {
            for (var i = 1 ; i <= 100 ; i++) {
                var paginatorOpition = "<option value='" + i + "''>" + i + "</option>";
                $(".paginatorPageNumber select").append(paginatorOpition);
            }
            var morePage = "<option class='morePage'>" + '更多' + "</option>";
            $(".paginatorPageNumber select").append(morePage);
        }
    }
    else {
        for (var i = 1 ; i <= totalPages ; i++) {
            var paginatorOpition = "<option value='" + i + "''>" + i + "</option>";
            $(".paginatorPageNumber select").append(paginatorOpition);
        }
    }
    if (parameter.currentPage == '1') {
        $(".paginationBefore").remove();
    }
    if (parameter.currentPage == totalPages) {
        $(".paginationAfter").remove();
    }
    $("#changePageNum").val(parameter.currentPage);
    selectPageDoT(parameter);
}
//首页 尾页点击事件DoT模块方法
function changePageDOT(page) {
    $(".paginationFund").html('');
    foldJudgement(page);
    GetListParameter.currentPage = page;
    drawDoTable(GetListParameter, link);
}
//点击上一页DoT模块方法
function changePageBeforeDOT() {
    $(".table").html('');
    $(".paginationFund").html('');
    GetListParameter.currentPage--;
    foldJudgement(GetListParameter.currentPage);
    drawDoTable(GetListParameter, link);
}
//点击下一页DoT模块方法
function changePageAfterDOT() {
    GetListParameter.currentPage++;
    foldJudgement(GetListParameter.currentPage);
    drawDoTable(GetListParameter, link);
    $(".paginationFund").html('');
}
//切换页数
function selectPageDoT(parameter) {
    $("#changePageNum").change(function () {
        if ($(this).val() == "更多") {
            $(".paginationFund").html('');
            GetListParameter.currentPage = "100";
            var fold = "100";
            drawDoTable(GetListParameter, link);
        }
        else {
            if ($(this).val() > 100) {
                var fold = "100";
                GetListParameter.currentPage = $(this).val();
                drawDoTable(GetListParameter, link);
            } else {
                GetListParameter.currentPage = $(this).val();
                drawDoTable(GetListParameter, link);
            }
        }
    });
}
/**
 * 分页生成器 适用于DoT模块 改进版
 * @param  {[type]} currentPage [description]
 * @param  {[type]} totalPages  [description]
 * @param  {[type]} parameter   [description]
 * @param  {[type]} fold        [description]
 * @return {[type]}             [description]
 */
function doTPaginator(parameter, IdName) {
    //判断当页数为0时不产生分页
    if (parameter.TotalPages == '1' || parameter.TotalPages == '0') {
        return false;
    }
    var paginatorLeft = "<div class='paginationLeft'>第<span class='currentPage'>" + parameter.CurrentPage + "</span>/<span class='totalPages'>" + parameter.TotalPages + "</span>页</div>";
    var paginatorRight = "<div class='paginationRight'><a class='firstPage' href='javascript:void(0);' onclick='DoTchangePage(1)'>首页</a><a href='javascript:void(0);' class='paginationBefore'>上一页</a><a href='javascript:void(0);' class='paginationAfter'>下一页</a><a class='lastPage' href='javascript:void(0);' onclick='DoTchangePage(" + parameter.TotalPages + ")'>尾页</a></div><div class='paginatorPageNumber'> 跳转到第 <select class='changePageNum'></select> 页</div>";
    $("#"+IdName).append(paginatorLeft);
    $("#" + IdName).append(paginatorRight);
    $(".changePageNum").val(parameter.CurrentPage);
    //展示跳转页数
    showSelectPage(parameter.TotalPages);
    //切换页数
    doTselectPage(parameter.TotalPages);
    //展示是否可点击逻辑
    showOrHidePage(parameter.TotalPages, parameter.CurrentPage);
    //点击下一页
    $(".paginationAfter").click(_(function(){
        if (!($(this).hasClass('unclickable'))) {
            doTchangePageAfter(parameter.TotalPages, GetListParameter.currentPage);
        }
    }).debounce(400));
    //点击上一页
    $(".paginationBefore").click(_(function(){
        if (!($(this).hasClass('unclickable'))) {
            doTchangePageBefore(parameter.TotalPages, GetListParameter.currentPage);
        }
    }).debounce(400));
}
//渲染跳转页码select
function showSelectPage(page){
    for (var i = 1 ; i <= page ; i++) {
        var paginatorOpition = "<option value='" + i + "''>" + i + "</option>";
        $(".paginatorPageNumber select").append(paginatorOpition);
    }
}
//渲染页码分页
function showOrHidePage(TotalPages, CurrentPage){
    if (CurrentPage == '1') {
        $(".firstPage").addClass('unclickable');
        $(".paginationBefore").addClass('unclickable');
        $(".lastPage").removeClass('unclickable');
        $(".paginationAfter").removeClass('unclickable');
    }
    else if(CurrentPage == TotalPages) {
        $(".paginationAfter").addClass('unclickable');
        $(".lastPage").addClass('unclickable');
        $(".firstPage").removeClass('unclickable');
        $(".paginationBefore").removeClass('unclickable');
    }
    else{
        $(".firstPage").removeClass('unclickable');
        $(".lastPage").removeClass('unclickable');
        $(".paginationBefore").removeClass('unclickable');
        $(".paginationAfter").removeClass('unclickable');
    }
    $(".currentPage").html(CurrentPage);
    $(".changePageNum").val(CurrentPage);
}
//首页尾页展示逻辑
function showOrHidePageHead(page){
    if (page == '1') {
        $(".firstPage").addClass('unclickable');
        $(".paginationBefore").addClass('unclickable');
        $(".lastPage").removeClass('unclickable');
        $(".paginationAfter").removeClass('unclickable');
    }
    else if(page > '1') {
        $(".paginationAfter").addClass('unclickable');
        $(".lastPage").addClass('unclickable');
        $(".firstPage").removeClass('unclickable');
        $(".paginationBefore").removeClass('unclickable');
    }
    $(".currentPage").html(page);
    $(".changePageNum").val(page);
}
//首页 尾页点击事件DoT模块方法
function DoTchangePage(page) {
    GetListParameter.currentPage = page;
    drawDoTable(GetListParameter, link).then(function () {
        showOrHidePageHead(page);
    });
}
//点击上一页DoT模块方法
function doTchangePageBefore(TotalPage,CurrentPage) {
    if (CurrentPage == 2) {
        $(".firstPage").addClass('unclickable');
        $(".paginationBefore").addClass('unclickable');
    }
    else{
        $(".firstPage").removeClass('unclickable');
        $(".paginationBefore").removeClass('unclickable');        
    }
    GetListParameter.currentPage--;
    drawDoTable(GetListParameter, link).then(function () {
        showOrHidePage(TotalPage, GetListParameter.currentPage);
    });
}
//点击下一页DoT模块方法
function doTchangePageAfter(TotalPage,CurrentPage) {
    if (CurrentPage == TotalPage) {
        $(".lastPage").addClass('unclickable');
        $(".paginationAfter").addClass('unclickable');
    }
    else{
        $(".lastPage").removeClass('unclickable');
        $(".paginationAfter").removeClass('unclickable');
    }
    GetListParameter.currentPage++;
    drawDoTable(GetListParameter, link).then(function(){
        showOrHidePage(TotalPage, GetListParameter.currentPage);
    });
}
//切换页数
function doTselectPage(TotalPage) {
    $(".changePageNum").change(function () {
        GetListParameter.currentPage = $(this).val();
        drawDoTable(GetListParameter, link).then(function () {
            showOrHidePage(TotalPage, GetListParameter.currentPage);
        });
    });
}
/**
 * 分页生成器 适用于DoT模块（加可输入一页显示的条目数） 改进版
 * @param  {[type]} currentPage [description]
 * @param  {[type]} totalPages  [description]
 * @param  {[type]} parameter   [description]
 * @param  {[type]} fold        [description]
 * @return {[type]}             [description]
 */
var container = '';
function doTPagesPaginator(parameter, IdName) {
    container = IdName;
    if (parameter.TotalPages == '1' || parameter.TotalPages == '0') {
        return false;
    }
    var paginatorLeft = "<div class='paginationLeft'>第<span class='currentPage'>" + parameter.CurrentPage + "</span>/<span class='totalPages'>" + parameter.TotalPages + "</span>页</div>";
    var paginatorRight = "<div class='paginationRight'><a class='firstPage' href='javascript:void(0);' onclick='DoTchangePage(1)'>首页</a><a href='javascript:void(0);' class='paginationBefore'>上一页</a><a href='javascript:void(0);' class='paginationAfter'>下一页</a><a class='lastPage' href='javascript:void(0);' onclick='DoTchangePage(" + parameter.TotalPages + ")'>尾页</a></div><div class='paginatorPageNumber'> 跳转到第 <select class='changePageNum'></select> 页</div><div class='paginatorPageNumber'><select class='itemsPageNum'></select>条/页</div>";
    $("#" + IdName).append(paginatorLeft);
    $("#" + IdName).append(paginatorRight);
    showSelectPageItems(parameter.TotalPages, parameter.CurrentPage);
    showSelectItemsPage(parameter.ItemsPerPage);
    doTselectItemsPage();
    doTselectPageItems(parameter.TotalPages);
    showOrHidePage(parameter.TotalPages, parameter.CurrentPage);
    $(".paginationAfter").click(_(function () {
        if (!($(this).hasClass('unclickable'))) {
            doTchangePageAfter(parameter.TotalPages, parameter.CurrentPage);
        }
    }).debounce(400));
    $(".paginationBefore").click(_(function () {
        if (!($(this).hasClass('unclickable'))) {
            doTchangePageBefore(parameter.TotalPages, parameter.CurrentPage);
        }
    }).debounce(400));
}
function showSelectPageItems(page, CurrentPage) {
    //if (page > 1000) {
    //    alert("stackoverflow");
    //    return false;
    //}
    for (var i = 1 ; i <= page ; i++) {
        var paginatorOpition = "<option value='" + i + "''>" + i + "</option>";
        $("select.changePageNum").append(paginatorOpition);
    }
    $("select.changePageNum").val(CurrentPage);
}
function showSelectItemsPage(items) {
    //if (page > 1000) {
    //    alert("stackoverflow");
    //    return false;
    //}
    for (var i = 1 ; i <= 50 ; i++) {
        if (i % 5 == 0 && i!=5) {
            var paginatorOpition = "<option value='" + i + "''>" + i + "</option>";
            $("select.itemsPageNum").append(paginatorOpition);
        }
    }
    $("select.itemsPageNum").val(items);
}
function showOrHidePageHead(page) {
    if (page == '1') {
        $(".firstPage").addClass('unclickable');
        $(".paginationBefore").addClass('unclickable');
        $(".lastPage").removeClass('unclickable');
        $(".paginationAfter").removeClass('unclickable');
    } else if (page > '1') {
        $(".paginationAfter").addClass('unclickable');
        $(".lastPage").addClass('unclickable');
        $(".firstPage").removeClass('unclickable');
        $(".paginationBefore").removeClass('unclickable');
    }
}
//首页 尾页点击事件DoT模块方法
function DoTchangePageItems(page) {
    GetListParameter.currentPage = page;
    GetListParameter.PageSize = $("select.itemsPageNum").val();
    drawDoTable(GetListParameter, link).then(function () {
        $(".currentPage").html(page);
        $("select.changePageNum").val(page);
    })
}
//点击上一页DoT模块方法
function doTchangePageItemsBefore(TotalPage, CurrentPage) {
    GetListParameter.currentPage--;
    GetListParameter.PageSize = $("select.itemsPageNum").val();
    drawDoTable(GetListParameter, link).then(function () {
        showOrHidePageItems(TotalPage, GetListParameter.currentPage);
    })
}
//点击下一页DoT模块方法
function doTchangePageItemsAfter(TotalPage, CurrentPage) {
    GetListParameter.currentPage++;
    GetListParameter.PageSize = $("select.itemsPageNum").val();
    CurrentPage++;
    drawDoTable(GetListParameter, link).then(function () {
        showOrHidePageItems(TotalPage, GetListParameter.currentPage);
    })
}
//切换页数
function doTselectPageItems(TotalPage) {
    $("select.changePageNum").change(function () {
        GetListParameter.currentPage = $(this).val();
        GetListParameter.PageSize = $("select.itemsPageNum").val();
        drawDoTable(GetListParameter, link).then(function () {
            $(".currentPage").html(GetListParameter.currentPage);
            $("select.changePageNum").val(GetListParameter.currentPage);
            showOrHidePageItems(TotalPage, GetListParameter.currentPage);
        })
    })
}
//选择条目
function doTselectItemsPage() {
    $("select.itemsPageNum").on('change', function (e) {
        GetListParameter.currentPage = '1';
        GetListParameter.PageSize = $(this).val();
        drawDoTable(GetListParameter, link).then(function (res) {
            drawDoTPaginator(res, container);
        })
        e.stopPropagation();
    })
}

/**
 * 分页生成器 适用于DoT模块（宽度短的情况） 改进版
 * @param  {[type]} currentPage [description]
 * @param  {[type]} totalPages  [description]
 * @param  {[type]} parameter   [description]
 * @param  {[type]} fold        [description]
 * @return {[type]}             [description]
 */
function doTPaginatorShortWidth(parameter, IdName) {
    if (parameter.TotalPages == '1' || parameter.TotalPages == '0') {
        return false;
    }
    var paginatorRight = "<div class='paginatorPageNumber'> 第 <select style='position: absolute;z-index: 1;' onmousedown='if(this.options.length > 6) { this.size = 7 }' onblur='this.size = 0' onchange='this.size = 0' class='changePageNum'></select><span class='pagination-slash'>/</span><span class='totalPages'>" + parameter.TotalPages + "</span>页</div><div class='paginationRight'><a href='javascript:void(0);' class='paginationBefore'>上一页</a><a href='javascript:void(0);' class='paginationAfter'>下一页</a></div>";
    $("#" + IdName).append(paginatorRight);
    $(".changePageNum").val(parameter.CurrentPage);
    showSelectPageSW(parameter.TotalPages);
    doTselectPageSW(parameter.TotalPages);
    showOrHidePageSW(parameter.TotalPages, parameter.CurrentPage);
    $(".paginationAfter").click(_(function(){
        doTchangePageAfterSW(parameter.TotalPages, parameter.CurrentPage);
    }).debounce(250));
    $(".paginationBefore").click(_(function(){
        doTchangePageBeforeSW(parameter.TotalPages, parameter.CurrentPage);
    }).debounce(250));
}
function showSelectPageSW(page){
    //if (page > 1000) {
    //    alert("stackoverflow");
    //    return false;
    //}
    for (var i = 1 ; i <= page ; i++) {
        var paginatorOpition = "<option value='" + i + "''>" + i + "</option>";
        $(".paginatorPageNumber select").append(paginatorOpition);
    }
}    
function showOrHidePageSW(TotalPages, CurrentPage){
    if (CurrentPage == '1') {
        $(".paginationBefore").hide();
        $(".paginationAfter").show();
    }
    else if(CurrentPage == TotalPages) {
        $(".paginationAfter").hide();
        $(".paginationBefore").show();
    }
    else{
        $(".paginationAfter").show();
        $(".paginationBefore").show();
    }
}
function showOrHidePageHeadSW(page){
    if (page == '1') {
        $(".paginationBefore").hide();
        $(".paginationAfter").show();
    }
    else if(page > '1') {
        $(".paginationAfter").hide();
        $(".paginationBefore").show();
    }
}
//点击上一页DoT模块方法
function doTchangePageBeforeSW(TotalPage,CurrentPage) {
    GetListParameter.currentPage--;
    drawDoTable(GetListParameter, link).then(function () {
        showOrHidePageSW(TotalPage, GetListParameter.currentPage);
        $(".currentPage").html(GetListParameter.currentPage);
        $(".changePageNum").val(GetListParameter.currentPage);
    });
}
//点击下一页DoT模块方法
function doTchangePageAfterSW(TotalPage,CurrentPage) {
    GetListParameter.currentPage++;
    CurrentPage++;
    drawDoTable(GetListParameter, link).then(function(){
        showOrHidePageSW(TotalPage, GetListParameter.currentPage);
        $(".currentPage").html(GetListParameter.currentPage);
        $(".changePageNum").val(GetListParameter.currentPage);
    });
}
//切换页数
function doTselectPageSW(TotalPage) {
    $(".changePageNum").change(function () {
        GetListParameter.currentPage = $(this).val();
        drawDoTable(GetListParameter, link).then(function () {
            showOrHidePageSW(TotalPage, GetListParameter.currentPage);
            $(".currentPage").html(GetListParameter.currentPage);
            $(".changePageNum").val(GetListParameter.currentPage);
        });
    });
}
/**
 * 判断是否进行分页下拉选项折叠
 * @param  {[type]} page [传入判断页数]
 * @return {[type]}      [fold状态]
 */
function foldJudgement(page){
    if (page > 100) {
        fold = '100';
    }
    else {
        fold = '';
    }
}
/**
 * [Ajax动态table分页]
 * @param  parameter   [传参 fund(id,总页数)]
 * @param  link        [url]
 * @param  container   [所选table容器]
 * @param  currentPage [默认当前页码]
 * @param  tableClass  [table类型]
 * @param  cell        [列数据对应名称（data传来的Items对应名称的值），title名称和样式]
 * @param  colStyle    [列数据样式、链接]
 * @param  fold        [下拉选项折叠点]
 * @return [生成table]
 */
function drawTable(parameter, link, container, currentPage, tableClass, cell, colStyle, fold) {
    var itemData = parameter;
    $.ajax({
        type: "POST",
        url: link,
        data: itemData,
        success: function (data) {
            if (data.Items.length > 0) {
                var cellCount = cell.length;
                var rowCount = data.Items.length;
                var table = $("<table class='" + tableClass + "' >");
                table.appendTo($(container));
                var trHeader = $("<tr class='theader'></tr>");
                trHeader.appendTo(table);
                //生成theader 
                for (var j = 0; j < cellCount; j++) {
                    //判断title是否有定义样式
                    if (!cell[j].style) {
                        var td = "<td>" + cell[j].title + "</td>";
                    } else {
                        var td = "<td style=" + cell[j].style + ">" + cell[j].title + "</td>";
                    }
                    $(td).appendTo(trHeader);
                }
                //生成其余数据
                for (var i = 0; i < rowCount; i++) {
                    var tr = $("<tr></tr>");
                    tr.appendTo(table);
                    for (var j = 0; j < cellCount; j++) {
                        var field = cell[j].field;
                        var formatFun = cell[j].format;
                        var val = "";
                        var url = "";
                        if (data.Items[i][field] != null) {
                            val = data.Items[i][field];
                        }
                        if (data.Items[i][href] != null) {
                            var href = colStyle[j].href;
                            url = href + data.Items[i][href];
                        }
                        //判断列是否有定义样式、是否是链接
                        if (colStyle.length != 0) {
                            if (!colStyle[j].style) {
                                if (!colStyle[j].href) {
                                    if (formatFun) {
                                        if (formatFun == "timeFormat") {
                                            var td = "<td>" + timeFormat(val) + "</td>";
                                        }
                                    }
                                    else{
                                        var td = "<td>" + val + "</td>";
                                    }
                                }
                                else {
                                    if (formatFun) {
                                        if (formatFun == "timeFormat") {
                                            var td = "<td><a href=" + url + ">" + timeFormat(val) + "</a></td>";
                                        }
                                    }
                                    else{
                                        var td = "<td><a href=" + url + ">" + val + "</a></td>";
                                    }
                                }
                            }
                            //有样式  
                            else {
                                //无连接
                                if (!colStyle[j].href) {
                                    if (formatFun) {
                                        if (formatFun == "timeFormat") {
                                            var td = "<td style=" + colStyle[j].style + ">" + timeFormat(val) + "</td>";
                                        }
                                    }
                                    else{
                                        var td = "<td style=" + colStyle[j].style + ">" + val + "</td>";
                                    }
                                } 
                                else {
                                    var td = "<td style=" + colStyle[j].style + "><a href=" + url + ">" + val + "</a></td>";
                                }
                            }
                        }
                        //无注释无连接样式
                        else {
                            //是否格式化
                            if (formatFun) {
                                if (formatFun == "timeFormat") {
                                    var td = "<td>" + timeFormat(val) + "</td>";
                                }
                            }
                            else{
                                var td = "<td>" + val + "</td>";
                            }
                        }
                        $(td).appendTo(tr);
                    }
                }
                $(container).append("</table>");
                //同名基金合并列
                table_rowspan(".infoTable", 1);
                //分页生成器
                paginatorCeateor(currentPage, data.TotalPages, parameter, fold);
            }
            else {
                if ($('body').find('#tbMessage').length==1) {
                    $('#tbMessage').text('无数据');
                } else {
                    alertify.alert("表格无数据");
                }
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) { console.log(errorThrown) }
    })
}
/**
 * 合并表格列数
 * @param  {[表格id]}
 * @param  {[列数]}
 * @return {[生成合并]}
 */
function table_rowspan(table_id, table_colnum) {
    table_firsttd = "";
    table_currenttd = "";
    table_SpanNum = 0;
    colnum_Obj = $(table_id + " tr td:nth-child(" + table_colnum + ")");
    colnum_Obj.each(function (i) {
        if (i == 0) {
            table_firsttd = $(this);
            table_SpanNum = 1;
        } else {
            table_currenttd = $(this);
            if (table_firsttd.text() == table_currenttd.text()) {
                table_SpanNum++;
                table_currenttd.hide(); //remove();
                table_firsttd.attr("rowSpan", table_SpanNum);
                table_firsttd.attr("style", "background-color:#3B3831");
            } else {
                table_firsttd = $(this);
                table_SpanNum = 1;
                table_firsttd.attr("style", "background-color:#3B3831");
            }
        }
    });
}

//函数说明：合并指定表格（表格id为table_id）指定行（行数为table_rownum）的相同文本的相邻单元格
//参数说明：table_id 为需要进行合并单元格的表格id。如在HTMl中指定表格 id="table1" ，此参数应为 #table1
//参数说明：table_rownum 为需要合并单元格的所在行。其参数形式请参考jQuery中nth-child的参数。
//          如果为数字，则从最左边第一行为1开始算起。
//          "even" 表示偶数行
//          "odd" 表示奇数行
//          "3n+1" 表示的行数为1、4、7、10.......
//参数说明：table_maxcolnum 为指定行中单元格对应的最大列数，列数大于这个数值的单元格将不进行比较合并。
//          此参数可以为空，为空则指定行的所有单元格要进行比较合并。
function table_colspan(table_id, table_rownum, table_maxcolnum) {
    if (table_maxcolnum == void 0) {
        table_maxcolnum = 0;
    }
    table_firsttd = "";
    table_currenttd = "";
    table_SpanNum = 0;
    $(table_id + " tr:nth-child(" + table_rownum + ")").each(function (i) {
        row_Obj = $(this).children();
        row_Obj.each(function (i) {
            if (i == 0) {
                table_firsttd = $(this);
                table_SpanNum = 1;
            } else if ((table_maxcolnum > 0) && (i > table_maxcolnum)) {
                return "";
            } else {
                table_currenttd = $(this);
                if (table_firsttd.text() == table_currenttd.text()) {
                    table_SpanNum++;
                    table_currenttd.hide(); //remove();
                    table_firsttd.attr("colSpan", table_SpanNum);
                } else {
                    table_firsttd = $(this);
                    table_SpanNum = 1;
                }
            }
        });
    });
}
/**
 * 查询url参数
 * @param  {[type]} name [description]
 * @return {[type]}      [description]
 */
function getQueryString(name) { 
var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
var r = window.location.search.substr(1).match(reg); 
if (r != null) return decodeURI(r[2]); return null; 
}
// $(document).ready(function () {
//     //  FileUpLoader Plugin
//     $(".fileUpLoader").each(function () {
//         var fileUpLoaderText = "<input type='text' readonly='readonly' class='fileLoaderShow'><input type='button' class='fileLoaderButton button' value='选择文件'>";
//         var file = $(this).find('[type=file]');
//         file.before(fileUpLoaderText);
//     });
//     $(".fileUpLoader [type=file]").change(function () {
//         var arrs = $(this).val().split('\\');
//         var filename = arrs[arrs.length - 1];
//         var showText = $(this).siblings('.fileLoaderShow');
//         $(showText).val(filename);
//     });
// });

/**
 * 文件上传格式化jQuery插件
 * @auth: why
 */
$.fn.extend({
    formatFileUploader : function(){
            self = this;
            self.wrap("<div class='fileUpLoader'></div>");
            $(".fileUpLoader").each(function () {
                var fileUpLoaderText = "<input type='text' readonly='readonly' class='fileLoaderShow'><input type='button' class='fileLoaderButton button' value='选择文件'>";
                var file = $(this).find('[type=file]');
                file.before(fileUpLoaderText);
            });
            $(".fileUpLoader [type=file]").change(function () {
                var arrs = $(this).val().split('\\');
                var filename = arrs[arrs.length - 1];
                var showText = $(this).siblings('.fileLoaderShow');
                $(showText).val(filename);
            });
    }
});

// val为经json直接序列化后的C#的DateTime类型的数据
function timeFormat(val) {
    var re = /-?\d+/;
    var m = re.exec(val);
    var d = new Date(parseInt(m[0]));
// 按【2012-02-13 09:09:09】的格式返回日期
//return d.format("yyyy-MM-dd hh:mm:ss");
    return d.format("yyyy-MM-dd");
} 

// val为经json直接序列化后的C#的DateTime类型的数据
function dataTimeFormat(val) {
    var re = /-?\d+/;
    var m = re.exec(val);
    var d = new Date(parseInt(m[0]));
    // 按【2012-02-13 09:09:09】的格式返回日期
    return d.format("yyyy-MM-dd hh:mm");
    //return d.format("yyyy-MM-dd");
}
// val为经json直接序列化后的C#的DateTime类型的数据
function dataTimeFormatMore(val) {
    var re = /-?\d+/;
    var m = re.exec(val);
    var d = new Date(parseInt(m[0]));
    // 按【2012-02-13 09:09:09】的格式返回日期
    return d.format("yyyy-MM-dd hh:mm:ss");
    //return d.format("yyyy-MM-dd");
}
// 用于格式化日期显示
Date.prototype.format = function (format) //author: meizz 
{
    var o = {
        "M+": this.getMonth() + 1, //month 
        "d+": this.getDate(),    //day 
        "h+": this.getHours(),   //hour 
        "m+": this.getMinutes(), //minute 
        "s+": this.getSeconds(), //second 
        "q+": Math.floor((this.getMonth() + 3) / 3),  //quarter 
        "S": this.getMilliseconds() //millisecond 
    }
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
    (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o) if (new RegExp("(" + k + ")").test(format))
        format = format.replace(RegExp.$1,
      RegExp.$1.length == 1 ? o[k] :
        ("00" + o[k]).substr(("" + o[k]).length));
    return format;
}

/**
 * 格式化数据，小数部分不做处理，对整数部分进行千分位格式化的处理，如果有符号，正常保留
 * @auth: wm
 */
function formatCurrency(num) {
    //如果num是负数，则获取她的符号
    var sign = num.indexOf("-") == 0 ? '-' : '';
    //如果存在小数点，则获取数字的小数部分
    var cents = num.indexOf(".") > 0 ? num.substr(num.indexOf(".")) : '';
    cents = cents.length > 0 ? cents : '';//注意：这里如果是使用change方法不断的调用，小数是输入不了的
    //获取数字的整数部分
    if (sign == '-') {
        num = num.replace(/-/g, '');
        num = num.indexOf(".") > 0 ? num.substring(0, (num.indexOf("."))) : num;
    } else {
        num = num.indexOf(".") > 0 ? num.substring(0, (num.indexOf("."))) : num;
    }
    /*
      也可以这样想象，现在有一串数字字符串在你面前，如果让你给他家千分位的逗号的话，你是怎么来思考和操作的?
      字符串长度为0/1/2/3时都不用添加
      字符串长度大于3的时候，从右往左数，有三位字符就加一个逗号，然后继续往前数，直到不到往前数少于三位字符为止
     */
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3) ; i++) {
        num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
    }
    //将数据（符号、整数部分、小数部分）整体组合返回
    return (sign + num + cents);
}
//获取当天日期  yyyy-mm-dd
function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
}
/**
 * 检测开始时间是否小于结束时间
 * @auth: wm
 */
function checkDate(startDate, endDate) {
    var s = (startDate).replace(/-/g, "");
    var e = (endDate).replace(/-/g, "");
    var startdate = new Date(s);
    var enddate = new Date(e);
    if (s || e){
        if (s <= e || e=='') {
            return true;
        }
        else {
            alertify.alert("结束时间不能小于开始时间！");
            return false;
        }
    } else {
        return true;
    }
}
//mvc生成相关蒙层
$.extend({
    blockMask: function () {
        var mask = "<div id='domMessage' style='display:none;text-align:center;'><img src='/Images/PortfolioLoad.gif' /></div>";
        $("body").append(mask);
        $.blockUI({
            message: $('#domMessage')
        });
        $('.blockMsg').css("border", "none").css("background-color", "transparent");
    }
});
//mvc生成相关蒙层      
$.fn.extend({
    blockMaskArea: function () {
        var mask = "<div id='domMessage' style='display:none;text-align:center;'><img src='/Images/PortfolioLoad.gif' /></div>";
        $(this).append(mask);
        $(this).block({ message: $('#domMessage') });
        // $('.blockMsg').css("border", "none").css("background-color", "transparent");
    }
});
//Ajax后台报错信息展示
$.extend({
    errorMessageShow: function (data) {
        if ("Data" in data) {
            if (data.Data && data.Data != null && data.Data.HasStackTrace && data.Data.HasStackTrace == true) {
                //如需展示stackTrack信息
                var errorText = data.Data.StackTrace;
                var errorPanel = "<div class='stackTraceError' style='display:none'>" + errorText + "</div>";
                var errorBtn = "<button class='fundRedBtn stackTrackBtn'>获取错误信息</button>";
                $('body').append(errorPanel + errorBtn);
                $(document).on('click', '.stackTrackBtn', function (e) {
                    $(".stackTraceError").show();
                    e.stopPropagation();
                });
                $(document).bind('click', function () {
                    $('.stackTraceError').hide();
                });
                $(".stackTraceError").on('click', function (e) {
                    e.stopPropagation();
                });
                return false;
            } else {
                return true
            }
        } else {
            return true
        }
    }
});
/**
 * 权限控制（显示/隐藏）
 * @auth: wm
 */
$.extend({
    controlPermission: function (permissionList) {
        if (!window.permissionData) {
            var actionCodes = [];
            $.each(permissionList, function (i, dom) {
                actionCodes.push(dom.action);
            });
            var actions = {
                ActionCodes: actionCodes
            };
            $.ajax({
                url: '/Permission/GetActionRole',
                type: 'POST',
                dataType: 'json',
                data: actions,
                success: function (res) {
                    window.permissionData = res.Data;
                    if (res.Code == 0) {
                        showPermissionData(permissionList, res.Data);
                    } else {
                        alertify.alert(res.Message);
                    }
                }
            }).fail(function () {
                alertify.alert("失败:请重试或联系技术人员");
            });
        } else {
            showPermissionData(permissionList, window.permissionData);
        }

    }
});
function showPermissionData(permissionList, permissionData) {
    $.each(permissionList, function (i, dom) {
        $.each(permissionData, function (j, item) {
            if (dom.action == item.ActionCode) {
                if (item.Checked){
                    $('.' + dom.className).removeClass('fundPermission');
                }else{
                    $('.' + dom.className).addClass('fundPermission');
                }
                //$('.' + dom.className).css('display', item.Checked ? 'inline-block' : 'none');
            }
        })
    })
}
/**
 * ABS链接跳转方法
 * @auth: why
 */
function absLinkJumper(type, item){
    if(type == "link"){
        //type为link适用于a标签的跳转，item为相应的id
        $.ajax({
            url: "/FundManagement/RedirectPage?code=" + item,
            async: false,
            success: function (data) {
                if (data.Code == "0") {
                    window.open(data.Message);
                }else {
                    alert(data.Message);
                }
            }
        });
    }
    else if(type == "search"){
        //适用于搜索框跳转ABS，直接改变相关字段的url a标签href直接跳转
        $.ajax({
            url: "/FundManagement/RedirectPage?code=" + item.Code,
            async: false,
            success: function (data) {
                if (data.Code == "0") {
                    item.url = data.Message;
                } else {
                    alert(data.Message);
                }
            }
        });
    }
}
/**
 * 主体跳转方法
 * @auth: lm
 */
function LinkIssuer(url, id){
        window.open("/FundManagement/"+url+"?id=" + id);
};
/**
 * 排序图标
 * @auth: why
 */
function appendSortSign(target, direction){
    if(direction == 1){
        target.append("<span class='sortSign'>▲</span>")
    }else if(direction == 2){
        target.append("<span class='sortSign'>▼</span>");
    }
}

/**
 *  判断接入终端类型
 * @auth: why
 */
function deviceDetction(){
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        return "Mobile"
    }else{
        return "PC"
    }
}
/**
 * 基金简称输入验证，长度不超过b位(只针对asp控件的方法)
 * @param  {[type]} a [操作对象]
 * @param  {[type]} b [位数]
 * @return {[type]}      [description]
 * @auth: wm
 */
function TextInput(a, b) {
    var max, leng;
    leng = $(a).val().length;
    if (b) {
        max = b;
    } else {
        max = $(a).attr('maxLength');
    }
    if (leng === max) {
        alertSafs("简称不能超过" + b + "位字符！");
    }
}
/**
 * table字长限制
 * @param  {[type]} text [操作对象]
 * @param  {[type]} num [位数]
 * @return {[type]}      [description]
 * @auth: glm
 */
function limiTtextLength(text,num){
    if(text.length > num){
        return text.substring(0,num)+'..';
    }
    return text
}
/**
 * trim处理输入内容
 * @auth: why
 */
String.prototype.trim = function(){
  return this.replace(/(^\s*)|(\s*$)/g, "");
}
/**
 * 点击table表头每一项进行升序和降序
 * @auth: ghj
 * param:tableHook :需要排序的这张表的挂钩，className or id ('.className')or('#id')
 *       datas： table每一列的表头，需要定义一个data-sortfield ，将需要排序的所有td的data-sortfield 的值放到datas的数组里面
 *       GetListParameter:
 */
function sortTable(tableHook, datas, GetListParameter,link) {
    var $thead = $(".headSort")
    var $ths = $thead.find('td');
    $ths.each(function (i,item) {
        $ths.eq(i).addClass('sortfield')
        $ths.eq(i).attr("data-sortfield", datas[i]);
    })
    //添加表头排序样式
    if (GetListParameter.SortField != '') {
        $(".sortfield").each(function () {
            var _self = $(this),
                _direction = GetListParameter.SortDirection;
            if ((_self.data('sortfield')) == GetListParameter.SortField) {
                appendSortSign(_self, _direction);
            }
        });
    }
}

function sortClick(GetListParameter, link) {
    $(document).on('click', '.sortfield', function () {
        GetListParameter.currentPage = 1;
        var _sortfield = $(this).data('sortfield');
        if (GetListParameter.SortField == _sortfield) {
            if (GetListParameter.SortDirection == 1) {
                GetListParameter.SortDirection = 2;
            } else if (GetListParameter.SortDirection == 2) {
                GetListParameter.SortDirection = 1;
            }
        } else {
            GetListParameter.SortField = _sortfield;
            GetListParameter.SortDirection = 2;
        }
        drawDoTable(GetListParameter, link).then(function (res) {
            drawDoTPaginator(res, container);
        })
    })

}

 