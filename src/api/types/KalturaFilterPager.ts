
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPager, KalturaPagerArgs } from './KalturaPager';

export interface KalturaFilterPagerArgs  extends KalturaPagerArgs {
    
}


export class KalturaFilterPager extends KalturaPager {

    

    constructor(data? : KalturaFilterPagerArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFilterPager',KalturaFilterPager);
