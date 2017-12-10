
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaESearchItem, KalturaESearchItemArgs } from './KalturaESearchItem';

export interface KalturaESearchUnifiedItemArgs  extends KalturaESearchItemArgs {
    
}


export class KalturaESearchUnifiedItem extends KalturaESearchItem {

    

    constructor(data? : KalturaESearchUnifiedItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchUnifiedItem' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchUnifiedItem',KalturaESearchUnifiedItem);
