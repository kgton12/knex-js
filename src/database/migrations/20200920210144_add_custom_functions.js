const CUSTOM_FUNCTIONS =''
 /*`
DELIMITER $$
CREATE OR REPLACE FUNCTION on_update_timestamp() 
RETURNS timestamp()
DETERMINISTIC
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;$$
DELIMITER ;
`*/

const DROP_CUSTOM_FUNCTIONS =''
/* 
`
DROP FUNCTION on_update_timestamp()
`*/

exports.up = async knex => knex.raw(CUSTOM_FUNCTIONS)
exports.down = async knex => knex.raw(DROP_CUSTOM_FUNCTIONS)