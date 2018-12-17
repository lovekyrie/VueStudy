$(function(){

  //阻止input的默认blur时间
  $('.remember').find('span').on('click',function(){

    if($(this).attr('type')==='false'){
      $(this).addClass('active')
      $(this).attr('type','true')
    }
    else{
      $(this).removeClass('active')
      $(this).attr('type','false')
    }
    
  })

  $('.auto-login').find('span').on('click',function(){

    if($(this).attr('type')==='false'){
      $(this).addClass('active')
      $(this).attr('type','true')
    }
    else{
      $(this).removeClass('active')
      $(this).attr('type','false')
    }
  })

  $('.operate').find('div:last-child').on('click',function(){

    if(!$('#account').val()){
      alert('请输入用户名')
    }
    else if(!$('#password').val()){
      alert('请输入密码')
    }
    else{
      window.location.href='../index/index.html'
    }
  })
})