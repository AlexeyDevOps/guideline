export default (props) => {
    return `<!DOCTYPE html>
		<html>
			<head>
				<base href="/">
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width" />
				<script defer src="bundle.js"></script>
			</head>
			<body>
				<div id="root"></div>				
			</body>
		</html>`
}