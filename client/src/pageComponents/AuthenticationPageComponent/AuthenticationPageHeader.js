import React from 'react'

const AuthenticationPageHeader = () => {
  return (
    <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <h1 align="center" style="font-family: Papyrus; color:#808080 ; font-weight: bold; font-size: 50px ">Food Before Me</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">&nbsp;</div>
            </div>
            
            <div class="row">
                <div class="col-md-4 col-md-offset-4">
                    <div class="panel panel-default" style="background-color: #C0C0C0;">
                        <div class="panel-body" style="background-color: #C0C0C0;">
                            <h2 class="h2"  align="center" style="color: #FFFFFF">WELCOME  BACK!</h2>
                            
                        
                            <div class="row">
                                <div class="col-md-12">
                                    <h4 class="h4" style="color: #FFFFFF">Sign into Account</h4>
                                <div id="alertmsg"></div>
                                
                            </div>
                            <form action="../controller/my_login_controller.php?status=login" method="post">
                                <div class="form-group">
                                    <div class="input-group">
                                        <input type="text" class="form-control" name="username" id="username" placeholder="Email" style="height:50px"/>
                                        <span class="input-group-addon">
                                            <i class="glyphicon glyphicon-user"></i>
                                        </span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">&nbsp;</div>
                                </div>
                                <div class="form-group">
                                    <div class="input-group">
                                        <input type="password" class="form-control" name="password" id="password" placeholder="Password" style="height:50px"/>
                                        <span class="input-group-addon">
                                            <i class="glyphicon glyphicon-lock"></i>
                                        </span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">&nbsp;</div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <button class="btn btn-block" style="background-color:#808080; color:#FFFFFF;">Log in</button>
                                    </div>
                                </div>
                            </form>
                            <div class="row">
                                <div class="col-md-12">&nbsp;</div>
                            </div>
                            <a href="../view/my_user_signup.php" style="color: #FFFFFF; text-align: center;">New Here? Sign up</a>
                            
                        </div>
            
                    
                    
                    </div>
              </div>
            </div>
        </div>
      </div>
  )
}

export default AuthenticationPageHeader
