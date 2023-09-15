# Features:
  1. Users can't  select a  course twice.If users select then they will get an error.
  2. After selecting a course,  the course name will be added in cart, it's credit hour and price also be added in cart.
  3. A user cannot have more than 20 hours of total credit. It means when a user select multiple courses, all course's total credit hours should be less then 20. If user select multiple courses but the remaining hours limit crossed then he will get an error like "You don't have enough credit hours to enroll this course"  

# State:
  I used useState four times, 
   1. To add any item to the cart.
   2. To update the remaining credit hours, which will depend on the total credit hours.
   3. To update the total credit hours of the items on the cart.
   4. To update the total price of the items in the cart.
  
  