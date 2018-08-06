#smartwash
### 智柜喜洗App  
  一款用于智能洗衣的App,用户可以通过扫描衣服上绑定的条码录入待洗衣物的信息，生成相应的订单，并查看订单的详细信息。这里主要的页面包括首页、订单信息页面、确认付款等页面。具体页面内容在[首页](https://sjj0330.github.io/smartwash/homePage.html)中可以看到。
  
  首页的主要内容有以下几个模块：
  
   **1. 账号信息**
   
   首先是账号信息，该模块内容包含用户的基本信息。
 
![](https://sjj0330.github.io/smartwash/swReadImg/account.png)

   **2. 申请洗衣袋**
   
   当户需要洗衣服时，首先点击申请洗衣袋，页面跳转到相应的页面，用户需要输入待洗涤的衣物件数，如下图所示：
   
![](https://sjj0330.github.io/smartwash/swReadImg/input.png)

   默认应该输入的衣物件数的范围是[1,10]，如果用户没有输入数字，或者输入的数字超过默认的范围，点击确认按钮后，页面会弹出提示框，提醒用户输入正确的衣物件数。
   
![](https://sjj0330.github.io/smartwash/swReadImg/right2333.png)

   **3. 绑定洗衣袋**
   
   用户获取洗衣袋之后，点击绑定洗衣袋时，页面跳转至如下页面。扫描袋子上的条形码可以绑定洗衣袋。之后将待洗衣物放入袋中，再将洗衣袋放入智能洗衣柜中等待工作人员揽收即可。
   
![](https://sjj0330.github.io/smartwash/swReadImg/scan.png)

   **4. 订单状态**
   
   工作人员揽收审核衣物，再通过微信提交详细订单给用户。衣物状态更新会通过微信提示用户。订单状态包括待确认、清洗中、待取等。
   
![](https://sjj0330.github.io/smartwash/swReadImg/orders.png)

   **5. 待确认订单**
   
   待确认订单为用户尚未确认付款的订单，页面内容包括该订单下待洗的衣物以及选择不同的洗衣门店需要支付的金额。
   
![](https://sjj0330.github.io/smartwash/swReadImg/待确认top22.png)

![](https://sjj0330.github.io/smartwash/swReadImg/待确认bottom22.png)

![](https://sjj0330.github.io/smartwash/swReadImg/dqr222.png)

   **6. 清洗中订单**
   
   清洗中的订单内容为某一订单下正在清洗的衣物以及所选洗衣门店的付款信息。
   
![](https://sjj0330.github.io/smartwash/swReadImg/qingxizhong12.png)

![](https://sjj0330.github.io/smartwash/swReadImg/qingxizhong22.png)

   **7. 待取订单**
   
   衣物清洗完毕后被工作人员放回洗衣柜，订单状态转为待取，用户在待取订单列表中点击获取取衣条码，进入相应的订单中，获取到取衣条码后，在洗衣柜扫码口扫描取衣码，取出衣物，订单完成。
   
![](https://sjj0330.github.io/smartwash/swReadImg/待取2.png)

   **8. 历史订单**
   
   用户在历史订单列表中点击全部可以查看全部订单内容。  
   
![](https://sjj0330.github.io/smartwash/swReadImg/allOrders.png)

![](https://sjj0330.github.io/smartwash/swReadImg/全部订单2.png)

   **9. 广告栏**
   
   在首页的底部，还有一个横向滑动栏，可以放入一些宣传或广告图片作为展示内容。
   
![](https://sjj0330.github.io/smartwash/swReadImg/others.png)

   **10. 小助手图标**
   
   最后需要说明的是，在每个页面的左上角都有一个小助手图标，点击之后会出现一个弹窗，如下图所示：
   
![](https://sjj0330.github.io/smartwash/swReadImg/first.png)

   智柜小助手的内容主要有Q&A问答和小助手电话。
   
   点击Q&A，会出现用户可能会遇到的问题列表，继续点击任意问题，会有相应的解答。
   
![](https://sjj0330.github.io/smartwash/swReadImg/second.png)

![](https://sjj0330.github.io/smartwash/swReadImg/third.png)

   点击小助手电话，会调用手机上的拨号功能，可以电话咨询客服人员相关问题。
    
![](https://sjj0330.github.io/smartwash/swReadImg/t-sec.png)

![](https://sjj0330.github.io/smartwash/swReadImg/phone2.png)

   小助手图标只在页面回到顶部的时候显示，当页面向下滚动一定距离时该图标会自动消失。


