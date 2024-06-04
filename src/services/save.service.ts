const save_lists = require("../../db/models/save_lists");
export async function SAVE(user_id: any, event_id: any) {
    try {

        const save_data: any = await save_lists.create({
            user_id,
            event_id,
        });
        return save_data;
    } catch (error) {
        console.log("error=>", error);

    }
}
export async function GET_SAVE(user_id: any) {
    try {
        
        const save_data = await save_lists.findAll({
            where: { user_id },

        });
        return save_data;
    } catch (error) {
        console.log("error=>", error);

    }
}
export async function DELETE_SAVE(user_id: any,event_id:any) {
    try {
        const result = await save_lists.destroy({
            where: { user_id, event_id },
          });
        return result;
    } catch (error) {
        console.log("error=>", error);

    }
}