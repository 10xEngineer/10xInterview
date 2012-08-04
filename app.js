<html>
<head>

<script src="http://ajaxorg.github.com/ace/build/src/ace.js"></script>
<!-- script src="/channel/bcsocket.js"></script -->
<script src="/js/libs/ShareJS/webclient/share.js"></script>
<script src="js/libs/ace/lib/ace.js"></script>

</head>
<body>
	<div id="editor" />
	<script>
	    var editor = ace.edit("editor");

	    sharejs.open('hello', 'text', function(error, doc) {
	        doc.attach_ace(editor);
	    });
	</script>
</body>
</html>