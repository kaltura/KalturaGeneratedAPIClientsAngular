
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSearchItem, KalturaSearchItemArgs } from './KalturaSearchItem';

export interface KalturaCategoryUserAdvancedFilterArgs  extends KalturaSearchItemArgs {
    memberIdEq? : string;
	memberIdIn? : string;
	memberPermissionsMatchOr? : string;
	memberPermissionsMatchAnd? : string;
}


export class KalturaCategoryUserAdvancedFilter extends KalturaSearchItem {

    memberIdEq : string;
	memberIdIn : string;
	memberPermissionsMatchOr : string;
	memberPermissionsMatchAnd : string;

    constructor(data? : KalturaCategoryUserAdvancedFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCategoryUserAdvancedFilter' },
				memberIdEq : { type : 's' },
				memberIdIn : { type : 's' },
				memberPermissionsMatchOr : { type : 's' },
				memberPermissionsMatchAnd : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCategoryUserAdvancedFilter',KalturaCategoryUserAdvancedFilter);
