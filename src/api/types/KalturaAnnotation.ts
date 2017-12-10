
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaCuePoint, KalturaCuePointArgs } from './KalturaCuePoint';

export interface KalturaAnnotationArgs  extends KalturaCuePointArgs {
    parentId? : string;
	text? : string;
	endTime? : number;
	isPublic? : KalturaNullableBoolean;
	searchableOnEntry? : KalturaNullableBoolean;
}


export class KalturaAnnotation extends KalturaCuePoint {

    parentId : string;
	text : string;
	endTime : number;
	readonly duration : number;
	readonly depth : number;
	readonly childrenCount : number;
	readonly directChildrenCount : number;
	isPublic : KalturaNullableBoolean;
	searchableOnEntry : KalturaNullableBoolean;

    constructor(data? : KalturaAnnotationArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAnnotation' },
				parentId : { type : 's' },
				text : { type : 's' },
				endTime : { type : 'n' },
				duration : { type : 'n', readOnly : true },
				depth : { type : 'n', readOnly : true },
				childrenCount : { type : 'n', readOnly : true },
				directChildrenCount : { type : 'n', readOnly : true },
				isPublic : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				searchableOnEntry : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAnnotation',KalturaAnnotation);
