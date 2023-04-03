import './Contact.css'

const Contact = () => {
   var click =function(){
      String.prototype.isNumber = function(){
          return Number(this) == this;
      }
  
      String.prototype.isAlphaChar = function(){
          return (this<='Z'&&this>='A')||(this<='z'&&this>='a')||this==' ';
      }
  
      String.prototype.isAlpha = function(){
          let n = this.length;
  
          for(let i=0;i<n;++i){
              if(!(this.charAt(i).isAlphaChar()))return false;
          }
          return true;
      }
      String.prototype.isPasswordElement = function(){
         return (this<='Z'&&this>='A')||(this<='z'&&this>='a')||(this.isNumber());
      }
      function removeVietnameseTones(str) {
          str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
          str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
          str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
          str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
          str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
          str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
          str = str.replace(/đ/g,"d");
          str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
          str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
          str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
          str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
          str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
          str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
          str = str.replace(/Đ/g, "D");
          // Some system encode vietnamese combining accent as individual utf-8 characters
          // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
          str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
          str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
          // Remove extra spaces
          // Bỏ các khoảng trắng liền nhau
          // str = str.replace(/ + /g," ");
          // str = str.trim();
          // Remove punctuations
          // Bỏ dấu câu, kí tự đặc biệt
          // str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
          return str;
      }
      
      var input = document.querySelectorAll('input');
  
      var n = input.length;
      function phoneValidate(elem){
          return elem.startsWith('0')
          && elem.length == 10
          && elem.isNumber()
          ;
      }
      
      function nameValidate(str){
          str = removeVietnameseTones(str);
          return str.isAlpha();
      }
      for(let i=0;i<2;++i){
         if(!input[i].value){
            document.getElementsByClassName('error')[i].style.display = 'block';
         }
         else{
            document.getElementsByClassName('error')[i].style.display = 'none';

         }
      }
      
      function passwordValidate(str){
         if(str.length<8)return false;
         for(let i=0;i<str.length;++i){
            if(!str.charAt(i).isPasswordElement())return false;
         }
         return true;
      }
      if(!nameValidate(document.getElementById('name').value)){
         document.getElementsByClassName('error')[0].style.display = 'block';
         return;            
      }
      else{
         document.getElementsByClassName('error')[0].style.display = 'none';

        }
        if(!passwordValidate(document.getElementById('password').value)){
         document.getElementsByClassName('error')[1].style.display = 'block';
         return;
      }
      else{
         document.getElementsByClassName('error')[1].style.display = 'block';

      }
      for(let i=0;i<2;++i){
         if(!input[i].value){
            return;
         }
      }
      
      alert('Bạn đã đăng nhập thành công')
      window.location = './'
  }
   return <div className='contact'>
      <div id="box">
        <div class="header center padding-10">
            <p class="upper text-main larger-size">Đăng nhập hệ thống</p>
            <div class="language margin-30 padding-20">Tiếng Việt</div>
        </div>
        <div class="form padding-20">
            <p class="margin-20">Tên đăng nhập</p>
            <div class="line input"><div class="logo ti-user padding-10"></div><input type="text" id="name"/>
            <br/>
            </div>
                <div class="error">
                Vui lòng nhập dữ liệu hợp lệ
                </div>
            <p class="margin-20">Mật khẩu</p>
            <div class="line input"><div class="logo ti-key padding-10"></div><input type="password" id="password"/>
            <br/>
            </div>
            <div class="error">
                Vui lòng nhập dữ liệu hợp lệ
            </div>
            <div class="line function"><p class=""><input type="checkbox" name="" id=""/> Ghi nhớ</p><p class="red-text">Quên mật khẩu?</p></div>
            <button class="background-main padding-20" onClick={click}>Đăng nhập</button>
        </div>
    </div>
   </div>;
};

export default Contact;