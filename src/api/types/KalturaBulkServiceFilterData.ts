
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter } from './KalturaFilter';
import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaBulkServiceData, KalturaBulkServiceDataArgs } from './KalturaBulkServiceData';

export interface KalturaBulkServiceFilterDataArgs  extends KalturaBulkServiceDataArgs {
    filter? : KalturaFilter;
	templateObject? : KalturaObjectBase;
}


export class KalturaBulkServiceFilterData extends KalturaBulkServiceData {

    filter : KalturaFilter;
	templateObject : KalturaObjectBase;

    constructor(data? : KalturaBulkServiceFilterDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkServiceFilterData' },
				filter : { type : 'o', subTypeConstructor : KalturaFilter, subType : 'KalturaFilter' },
				templateObject : { type : 'o', subTypeConstructor : KalturaObjectBase, subType : 'KalturaObjectBase' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkServiceFilterData',KalturaBulkServiceFilterData);
