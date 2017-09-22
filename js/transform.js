$(document).ready(function() {
    $(".simditor-toolbar").insertAfter($(".simditor-body"));
});
function transform2text(htmlContent) {
	var textContent;
	textContent = htmlContent.replace(/<img[^>]+alt="([^>"]*)"[^>]+>/g, "[" + "$1" + "]");
	//textContent = textContent.replace(/<\/?[p|P][^>]*>/g, "<br>");
	textContent = textContent.replace(/<p>/g, "");
	textContent = textContent.replace(/<br>/g, "&nbsp;");
	textContent = textContent.replace(/<\/p>/g, "\n");
	return textContent;
}
function transform2html(textContent) {
	var htmlContent;
	htmlContent = "<p>" + textContent;
	htmlContent = htmlContent.replace(/\n/g ,"</p>\n<p>");
	htmlContent = htmlContent.replace(/\[([^\[\]]*)\]/g , "<img src=\""+ imgPath +""+"$1"+".png\" width=\"22\" height=\"22\" alt=\"" + "$1" + "\" data-emoji=\"true\" data-non-image=\"true\">");
	htmlContent = htmlContent.substring(0,htmlContent.length - 3);
	return htmlContent;
}
function iconImg(emojiPath,linkPath) {
	if (emojiPath) {
		$(".toolbar-item-emoji").html("<img src=\"" + emojiPath + "\" width = \"25\" />");
	}
	if (linkPath) {
		$(".toolbar-item-link").html("<img src=\"" + linkPath + "\" width = \"25\" />");
	}
}

