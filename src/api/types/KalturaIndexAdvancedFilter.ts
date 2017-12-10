
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSearchItem, KalturaSearchItemArgs } from './KalturaSearchItem';

export interface KalturaIndexAdvancedFilterArgs  extends KalturaSearchItemArgs {
    indexIdGreaterThan? : number;
	depthGreaterThanEqual? : number;
}


export class KalturaIndexAdvancedFilter extends KalturaSearchItem {

    indexIdGreaterThan : number;
	depthGreaterThanEqual : number;

    constructor(data? : KalturaIndexAdvancedFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaIndexAdvancedFilter' },
				indexIdGreaterThan : { type : 'n' },
				depthGreaterThanEqual : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaIndexAdvancedFilter',KalturaIndexAdvancedFilter);
