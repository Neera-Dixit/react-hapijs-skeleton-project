import React,{Component} from 'react';

export default class Deafult extends Component {
	
	render(){

		   return(
		      <html>
		      <head>
		        <meta charSet="utf-8"></meta>
		        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
		        <title>React-Hapi App</title>
		      </head>
		      <body style={{fontFamily: ['Varela Round', 'sans-serif']}}>
		        <div id="app"></div>
		        <script src="js/bundle.js"></script>
		      </body>
		      </html>
    		);
	}
}