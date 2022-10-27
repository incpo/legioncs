export default function statusConverter (statusInfo, costInfo) {
    const status = statusInfo.status;
    const time = statusInfo.time;
    const unlimited = 'Навсегда';
    const limited = '30 дней';
    if(status === '') return false;
    else if(status === '01' && time) return ['VIP', unlimited, costInfo.vip.status.cost];
    else if(status === '01' && !time) return ['VIP', limited, costInfo.vip.status.cost2];
    else if(status ==='02' && time) return ['PREMIUM', unlimited, costInfo.premium.status.cost];
    else if(status === '02' && !time) return ['PREMIUM', limited, costInfo.premium.status.cost2];
    else if(status ==='03' && time) return ['ADMIN', unlimited, costInfo.admin.status.cost];
    else if(status ==='03' && !time) return ['ADMIN', limited, costInfo.admin.status.cost2];
    else return 'ERROR'
}
