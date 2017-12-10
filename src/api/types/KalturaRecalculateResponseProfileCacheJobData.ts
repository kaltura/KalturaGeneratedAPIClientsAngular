
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSessionType } from './KalturaSessionType';
import { KalturaIntegerValue } from './KalturaIntegerValue';
import { KalturaRecalculateCacheJobData, KalturaRecalculateCacheJobDataArgs } from './KalturaRecalculateCacheJobData';

export interface KalturaRecalculateResponseProfileCacheJobDataArgs  extends KalturaRecalculateCacheJobDataArgs {
    protocol? : string;
	ksType? : KalturaSessionType;
	userRoles? : KalturaIntegerValue[];
	cachedObjectType? : string;
	objectId? : string;
	startObjectKey? : string;
	endObjectKey? : string;
}


export class KalturaRecalculateResponseProfileCacheJobData extends KalturaRecalculateCacheJobData {

    protocol : string;
	ksType : KalturaSessionType;
	userRoles : KalturaIntegerValue[];
	cachedObjectType : string;
	objectId : string;
	startObjectKey : string;
	endObjectKey : string;

    constructor(data? : KalturaRecalculateResponseProfileCacheJobDataArgs)
    {
        super(data);
        if (typeof this.userRoles === 'undefined') this.userRoles = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRecalculateResponseProfileCacheJobData' },
				protocol : { type : 's' },
				ksType : { type : 'en', subTypeConstructor : KalturaSessionType, subType : 'KalturaSessionType' },
				userRoles : { type : 'a', subTypeConstructor : KalturaIntegerValue, subType : 'KalturaIntegerValue' },
				cachedObjectType : { type : 's' },
				objectId : { type : 's' },
				startObjectKey : { type : 's' },
				endObjectKey : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRecalculateResponseProfileCacheJobData',KalturaRecalculateResponseProfileCacheJobData);
