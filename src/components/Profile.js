import "./Profile.css"
function Profile(){
    return(
      <div class="main">
      <div class = "setting"><p class = "as">Account Settings</p></div>
      <div class="info">
          <div class="photo">
              <img src= "https://github.com/gobinda009/Assignment/assets/142678772/eece9bb9-ed3f-442c-8a1a-262ddcfeb534" alt="avayar"/>
          </div>
          <div>
              <h4 class = "marry">Marry Doe</h4>
              <p class = "mail">Marry@Gmail.Com</p>
          </div>
      </div>
      <div class="about">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</div>


  </div>
    );

}

export default Profile;