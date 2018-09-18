export default (props) => {
    return `<!DOCTYPE html>
		<html>
			<head>
				<base href="/">
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width" />
				<title>${props.title || 'Default'}</title>
				<script defer src="bundle.js"></script>
			</head>
			<body>
				<div id="root" class='base-container'></div>				
			</body>
		</html>`
}