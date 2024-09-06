export const ABI = {"address":"0x1f28dd5911fb86918ecf74e99628dd6fb8f5a05803a2cb36ac395bd288977335","name":"dice","friends":[],"exposed_functions":[{"name":"place_coin","visibility":"private","is_entry":true,"is_view":false,"generic_type_params":[{"constraints":[]}],"params":["&signer","address","bool","u16","u64"],"return":[]}],"structs":[{"name":"Dice","is_native":false,"abilities":["drop","store"],"generic_type_params":[],"fields":[{"name":"pool","type":"address"},{"name":"player","type":"address"},{"name":"collateral","type":"u64"},{"name":"is_roll_over","type":"bool"},{"name":"expect_hundredths","type":"u16"},{"name":"actual_hundredths","type":"u16"},{"name":"pay_ratio_bps","type":"u64"}]}]} as const