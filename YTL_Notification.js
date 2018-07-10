function YTL_Notification() {
  var hls_bridge_endopint = 'https://vrchat-hls-bridge.herokuapp.com/submit';
  var discord_endpoint = '--discord api endpoint url goes here--';
  var instance_key = '--instance key goes here--'
  
  var start = 0;
  var max = 500;
  var threads = GmailApp.search('from:YouTube is:unread', start, max);
  
  for (var n in threads) {
    threads[n].markRead();
  }
  if(threads.length !== 0){
    var the = threads[0];
    var msgs = the.getMessages();
    var msg = msgs[msgs.length-1];
    var url = msg.getBody().match(/watch%3Fv%3D.+%26/);
    var subject = msg.getSubject();
    var channel = subject.match(/🔴 (.*) はライブ配信中です/);
    
    if( channel !== null){
      var channel = channel[0]
      .replace(/🔴 /, '')
      .replace(/ はライブ配信中です/, '');
      var title = subject.match(/はライブ配信中です: (.*)/)[0]
      .replace(/はライブ配信中です: /, '');
      if(url !== null){
        url = url[0]
        .replace(/watch%3Fv%3D/,'')
        .replace(/%26/,'');
        url = 'https://www.youtube.com/watch?v=' + url;
      }
      var post = '📡Live on ' + channel + ': ' + title + '\n' + url;
      
      //HLS Bridge
      var data = {
        'instance' : instance_key,
        'ls_url' : url,
        'override' : '0',
      };
      var options = {
        'method': 'post',
        'contentType': 'application/json',
        'payload': JSON.stringify(data),
      };
      var response = UrlFetchApp.fetch(hls_bridge_endopint, options);
      
      //Discord
      var data = {
        'content' : post,
      };
      var options = {
        'method': 'post',
        'contentType': 'application/json',
        'payload': JSON.stringify(data),
      };
      var response = UrlFetchApp.fetch(discord_endpoint, options);
    }
  }
}