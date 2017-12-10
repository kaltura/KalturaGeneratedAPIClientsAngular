
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCuePointType } from './KalturaCuePointType';
import { KalturaCuePointStatus } from './KalturaCuePointStatus';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaCuePointArgs  extends KalturaObjectBaseArgs {
    entryId? : string;
	triggeredAt? : Date;
	tags? : string;
	startTime? : number;
	partnerData? : string;
	partnerSortValue? : number;
	forceStop? : KalturaNullableBoolean;
	thumbOffset? : number;
	systemName? : string;
}


export class KalturaCuePoint extends KalturaObjectBase {

    readonly id : string;
	readonly cuePointType : KalturaCuePointType;
	readonly status : KalturaCuePointStatus;
	entryId : string;
	readonly partnerId : number;
	readonly createdAt : Date;
	readonly updatedAt : Date;
	triggeredAt : Date;
	tags : string;
	startTime : number;
	readonly userId : string;
	partnerData : string;
	partnerSortValue : number;
	forceStop : KalturaNullableBoolean;
	thumbOffset : number;
	systemName : string;

    constructor(data? : KalturaCuePointArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCuePoint' },
				id : { type : 's', readOnly : true },
				cuePointType : { type : 'es', readOnly : true, subTypeConstructor : KalturaCuePointType, subType : 'KalturaCuePointType' },
				status : { type : 'en', readOnly : true, subTypeConstructor : KalturaCuePointStatus, subType : 'KalturaCuePointStatus' },
				entryId : { type : 's' },
				partnerId : { type : 'n', readOnly : true },
				createdAt : { type : 'd', readOnly : true },
				updatedAt : { type : 'd', readOnly : true },
				triggeredAt : { type : 'd' },
				tags : { type : 's' },
				startTime : { type : 'n' },
				userId : { type : 's', readOnly : true },
				partnerData : { type : 's' },
				partnerSortValue : { type : 'n' },
				forceStop : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				thumbOffset : { type : 'n' },
				systemName : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCuePoint',KalturaCuePoint);
