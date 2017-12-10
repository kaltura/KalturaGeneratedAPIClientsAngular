
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaReportInputBaseFilterArgs  extends KalturaObjectBaseArgs {
    fromDate? : number;
	toDate? : number;
	fromDay? : string;
	toDay? : string;
}


export class KalturaReportInputBaseFilter extends KalturaObjectBase {

    fromDate : number;
	toDate : number;
	fromDay : string;
	toDay : string;

    constructor(data? : KalturaReportInputBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaReportInputBaseFilter' },
				fromDate : { type : 'n' },
				toDate : { type : 'n' },
				fromDay : { type : 's' },
				toDay : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaReportInputBaseFilter',KalturaReportInputBaseFilter);
