
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaReportExportItemType } from './KalturaReportExportItemType';
import { KalturaReportType } from './KalturaReportType';
import { KalturaReportInputFilter } from './KalturaReportInputFilter';
import { KalturaReportResponseOptions } from './KalturaReportResponseOptions';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaReportExportItemArgs  extends KalturaObjectBaseArgs {
    reportTitle? : string;
	action? : KalturaReportExportItemType;
	reportType? : KalturaReportType;
	filter? : KalturaReportInputFilter;
	order? : string;
	objectIds? : string;
	responseOptions? : KalturaReportResponseOptions;
}


export class KalturaReportExportItem extends KalturaObjectBase {

    reportTitle : string;
	action : KalturaReportExportItemType;
	reportType : KalturaReportType;
	filter : KalturaReportInputFilter;
	order : string;
	objectIds : string;
	responseOptions : KalturaReportResponseOptions;

    constructor(data? : KalturaReportExportItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaReportExportItem' },
				reportTitle : { type : 's' },
				action : { type : 'en', subTypeConstructor : KalturaReportExportItemType, subType : 'KalturaReportExportItemType' },
				reportType : { type : 'es', subTypeConstructor : KalturaReportType, subType : 'KalturaReportType' },
				filter : { type : 'o', subTypeConstructor : KalturaReportInputFilter, subType : 'KalturaReportInputFilter' },
				order : { type : 's' },
				objectIds : { type : 's' },
				responseOptions : { type : 'o', subTypeConstructor : KalturaReportResponseOptions, subType : 'KalturaReportResponseOptions' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaReportExportItem'] = KalturaReportExportItem;