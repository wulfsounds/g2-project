const { List } = require('../models');

// Weekly view list generator
const createLists = (userId) => {
    
    const weeklylist = [
        {
            list_date: 'Monday',
            user_id: userId
        },
        {
            list_date: 'Tuesday',
            user_id: userId
        },
        {
            list_date: 'Wednesday',
            user_id: userId
        },
        {
            list_date: 'Thursday',
            user_id: userId
        },
        {
            list_date: 'Friday',
            user_id: userId
        },
        {
            list_date: 'Saturday',
            user_id: userId
        },
        {
            list_date: 'Sunday',
            user_id: userId
        },
    ]
    
    return List.bulkCreate(weeklylist);
    
};
  
module.exports = createLists;