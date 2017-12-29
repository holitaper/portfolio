  $(document).ready(function () {
      $('.collapsible').collapsible();
      $('.materialboxed').materialbox();
      AOS.init();
  });

  var drop;

  drop = new Drop({
      target: document.querySelector('.drop-target'),
      content: 'Меня зовут Васильев Николай, учусь в 31 школе, 9 класс, 14 лет, люблю компьютерные игры, да и всё что связано с компьютером, изучаю ветви программирования.',
      position: 'top left',
      openOn: 'click'
  });

