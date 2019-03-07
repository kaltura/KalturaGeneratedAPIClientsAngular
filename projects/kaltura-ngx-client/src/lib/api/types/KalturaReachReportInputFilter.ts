
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaVendorServiceType } from './KalturaVendorServiceType';
import { KalturaVendorServiceFeature } from './KalturaVendorServiceFeature';
import { KalturaVendorServiceTurnAroundTime } from './KalturaVendorServiceTurnAroundTime';
import { KalturaReportInputFilter, KalturaReportInputFilterArgs } from './KalturaReportInputFilter';

export interface KalturaReachReportInputFilterArgs  extends KalturaReportInputFilterArgs {
    serviceType? : KalturaVendorServiceType;
	serviceFeature? : KalturaVendorServiceFeature;
	turnAroundTime? : KalturaVendorServiceTurnAroundTime;
}


export class KalturaReachReportInputFilter extends KalturaReportInputFilter {

    serviceType : KalturaVendorServiceType;
	serviceFeature : KalturaVendorServiceFeature;
	turnAroundTime : KalturaVendorServiceTurnAroundTime;

    constructor(data? : KalturaReachReportInputFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaReachReportInputFilter' },
				serviceType : { type : 'en', subTypeConstructor : KalturaVendorServiceType, subType : 'KalturaVendorServiceType' },
				serviceFeature : { type : 'en', subTypeConstructor : KalturaVendorServiceFeature, subType : 'KalturaVendorServiceFeature' },
				turnAroundTime : { type : 'en', subTypeConstructor : KalturaVendorServiceTurnAroundTime, subType : 'KalturaVendorServiceTurnAroundTime' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaReachReportInputFilter'] = KalturaReachReportInputFilter;