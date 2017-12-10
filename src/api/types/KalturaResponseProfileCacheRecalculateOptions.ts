
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaResponseProfileCacheRecalculateOptionsArgs  extends KalturaObjectBaseArgs {
    limit? : number;
	cachedObjectType? : string;
	objectId? : string;
	startObjectKey? : string;
	endObjectKey? : string;
	jobCreatedAt? : Date;
	isFirstLoop? : boolean;
}


export class KalturaResponseProfileCacheRecalculateOptions extends KalturaObjectBase {

    limit : number;
	cachedObjectType : string;
	objectId : string;
	startObjectKey : string;
	endObjectKey : string;
	jobCreatedAt : Date;
	isFirstLoop : boolean;

    constructor(data? : KalturaResponseProfileCacheRecalculateOptionsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaResponseProfileCacheRecalculateOptions' },
				limit : { type : 'n' },
				cachedObjectType : { type : 's' },
				objectId : { type : 's' },
				startObjectKey : { type : 's' },
				endObjectKey : { type : 's' },
				jobCreatedAt : { type : 'd' },
				isFirstLoop : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaResponseProfileCacheRecalculateOptions',KalturaResponseProfileCacheRecalculateOptions);
