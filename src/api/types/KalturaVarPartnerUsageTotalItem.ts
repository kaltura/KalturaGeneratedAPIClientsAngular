
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
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

KalturaTypesFactory.registerType('KalturaVarPartnerUsageTotalItem',KalturaVarPartnerUsageTotalItem);
