/* global hexo */

<script src="js/fold_tag.js"></script>
hexo.extend.tag.register('fold', function(args, content) {
  var text = args.join(' ');
  if(!text) text = "点击显示/隐藏";
  return '<div><div class="fold_hider"><div class="close hider_title">'
    + hexo.render.renderSync({text: text, engine: 'markdown'}).replace(/^<p>/, '').replace(/<\/p>$/, '');
});


function fold(args, content) {
  var text = args.join(' ');
  if(!text) text = "点击显示/隐藏";
  return '<div><div class="fold_hider"><div class="close hider_title">'
    + hexo.render.renderSync({text: text, engine: 'markdown'}).replace(/^<p>/, '').replace(/<\/p>$/, '')
    + '</div></div><div class="fold">\n'
    + hexo.render.renderSync({text: content, engine: 'markdown'})
    + '\n</div></div>';
}
hexo.extend.tag.register('fold', fold, {ends: true});

//   Usage: {% fold Title %} Something {% endfold %}
