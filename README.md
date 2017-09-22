# emojiKeyboard

//初始化编辑器
editor = new Simditor({
    //指定一个textarea
    textarea: $('#textEditor'),
    emoji: {
        //表情存放路径
        imagePath: 'images/emoji/',
        //表情名称对应图片文件名称，图片建议为64x64 PNG格式
        images: ['smile', 'smiley', 'laughing', 'blush', 'heart_eyes', 'smirk', 'flushed', 'satisfied', 'grin', 'wink', 'stuck_out_tongue_winking_eye', 'stuck_out_tongue', 'sleeping', 'worried', 'expressionless', 'sweat_smile', 'cold_sweat', 'joy', 'sob', 'angry', 'mask', 'scream', 'sunglasses', 'heart', 'broken_heart', 'star', 'anger', 'exclamation', 'question', 'zzz', 'thumbsup', 'thumbsdown', 'ok_hand', 'punch', 'v', 'clap', 'muscle', 'pray', 'skull', 'trollface', 'icon-57']
    },
    toolbar: ['emoji', 'link'],
    toolbarFloat: false,
});

//编辑器相关方法
//设置文本框内容(HTML) editor.setValue()
//获取文本框内容(HTML) editor.getValue() 

iconImg("images/emoji/smile.png", "images/emoji/link.png");
//iconImg(emojiPath,linkPath) 
//emojiPath,linkPath分别对应toolbar表情和链接图标的图片路径,为空默认为iconfont 

$(".button").click(function () {
    var text = transform2text(editor.getValue()); 	//transform2text() 将HTML内容转换为纯文本
    var html = transform2html(text); 				//transform2html() 将纯文本转换为HTML
    $(".preview").html(html);						//预览区域，应用相同样式请将preview作为类
    console.log(text)								//输出纯文本内容
    console.log(html)								//输出转换后的HTML内容
});
