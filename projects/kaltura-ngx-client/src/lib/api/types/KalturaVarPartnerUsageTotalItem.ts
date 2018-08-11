
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaVarPartnerUsageItem, KalturaVarPartnerUsageItemArgs } from './KalturaVarPartnerUsageItem';

export interface KalturaVarPartnerUsageTotalItemArgs  extends KalturaVarPartnerUsageItemArgs {
    
}


export class KalturaVarPartnerUsageTotalItem extends KalturaVarPartnerUsageItem {

    

    constructor(data? : KalturaVarPartnerUsageTotalItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVarPartnerUsageTotalItem' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaVarPartnerUsageTotalItem'] = KalturaVarPartnerUsageTotalItem;