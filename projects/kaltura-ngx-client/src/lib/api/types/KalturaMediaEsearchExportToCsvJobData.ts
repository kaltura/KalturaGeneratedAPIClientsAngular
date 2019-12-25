
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchEntryParams } from './KalturaESearchEntryParams';
import { KalturaExportToCsvOptions } from './KalturaExportToCsvOptions';
import { KalturaExportCsvJobData, KalturaExportCsvJobDataArgs } from './KalturaExportCsvJobData';

export interface KalturaMediaEsearchExportToCsvJobDataArgs  extends KalturaExportCsvJobDataArgs {
    searchParams? : KalturaESearchEntryParams;
	options? : KalturaExportToCsvOptions[];
}


export class KalturaMediaEsearchExportToCsvJobData extends KalturaExportCsvJobData {

    searchParams : KalturaESearchEntryParams;
	options : KalturaExportToCsvOptions[];

    constructor(data? : KalturaMediaEsearchExportToCsvJobDataArgs)
    {
        super(data);
        if (typeof this.options === 'undefined') this.options = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMediaEsearchExportToCsvJobData' },
				searchParams : { type : 'o', subTypeConstructor : KalturaESearchEntryParams, subType : 'KalturaESearchEntryParams' },
				options : { type : 'a', subTypeConstructor : KalturaExportToCsvOptions, subType : 'KalturaExportToCsvOptions' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaMediaEsearchExportToCsvJobData'] = KalturaMediaEsearchExportToCsvJobData;